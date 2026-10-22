import { useState, type SyntheticEvent } from 'react';

// Both forms (Contact and Careers) use this component.
// Set PUBLIC_FORM_ENDPOINT in Vercel (for example a Formspree URL) so submissions reach the clinic.
const ENDPOINT = (import.meta.env.PUBLIC_FORM_ENDPOINT as string | undefined) ?? '';

type Props = {
  kind: 'contact' | 'careers';
  positions?: string[];
  locations?: string[];
  defaultPosition?: string;
};

const field = 'mt-2 block min-h-12 w-full rounded-md border border-pine-900/25 bg-white px-4 py-3 text-ink outline-none transition focus:border-pine-900 focus:ring-2 focus:ring-pine-900/20';
const label = 'block text-sm font-semibold text-pine-950';

export default function SiteForm({ kind, positions = [], locations = [], defaultPosition }: Props) {
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [msg, setMsg] = useState('');
  const careers = kind === 'careers';

  async function onSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get('company_website')) return; // spam trap
    data.append('_subject', careers ? 'Cynergy job application' : 'Cynergy website message');
    if (!ENDPOINT) {
      setState('error');
      setMsg('This form is not connected yet. Please call (212) 974-7252 and we will help you.');
      return;
    }
    setState('sending');
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error('bad status');
      setState('done');
      form.reset();
    } catch {
      setState('error');
      setMsg('Sorry, something went wrong. Please try again or call (212) 974-7252.');
    }
  }

  if (state === 'done') {
    return (
      <div role="status" className="rounded-xl border border-pine-900/15 bg-sage-100 p-8">
        <p className="font-serif text-2xl text-pine-950">{careers ? 'Thank you for applying.' : 'Thank you. We got your message.'}</p>
        <p className="mt-3 text-ink/80">{careers ? 'Our team will read your application and contact you soon.' : 'A member of our team will reply as soon as we can. For urgent needs, please call (212) 974-7252.'}</p>
        <button type="button" onClick={() => setState('idle')} className="btn btn-outline mt-6">Send another</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate={false}>
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div>
        <label htmlFor={`${kind}-name`} className={label}>Full name *</label>
        <input id={`${kind}-name`} name="name" type="text" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor={`${kind}-email`} className={label}>Email *</label>
        <input id={`${kind}-email`} name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div>
        <label htmlFor={`${kind}-phone`} className={label}>Phone number {careers ? '*' : ''}</label>
        <input id={`${kind}-phone`} name="phone" type="tel" required={careers} autoComplete="tel" className={field} />
      </div>

      {careers ? (
        <>
          <div>
            <label htmlFor="job-position" className={label}>Position *</label>
            <select id="job-position" name="position" required defaultValue={defaultPosition ?? ''} className={field}>
              <option value="" disabled>Choose a position</option>
              {positions.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="job-license" className={label}>Active New York PT license? *</label>
            <select id="job-license" name="ny_license" required defaultValue="" className={field}>
              <option value="" disabled>Choose one</option>
              <option>Yes</option>
              <option>No, license in progress</option>
              <option>No</option>
            </select>
          </div>
          <div>
            <label htmlFor="job-grad" className={label}>Experience level *</label>
            <select id="job-grad" name="experience" required defaultValue="" className={field}>
              <option value="" disabled>Choose one</option>
              <option>New graduate</option>
              <option>1–3 years</option>
              <option>4–9 years</option>
              <option>10+ years</option>
            </select>
          </div>
          <div>
            <label htmlFor="job-location" className={label}>Preferred location</label>
            <select id="job-location" name="location" defaultValue="Any location" className={field}>
              <option>Any location</option>
              {locations.map((l) => <option key={l}>{l}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="job-link" className={label}>LinkedIn or portfolio link</label>
            <input id="job-link" name="link" type="url" placeholder="https://" className={field} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="job-resume" className={label}>Resume (PDF or Word) *</label>
            <input id="job-resume" name="resume" type="file" required accept=".pdf,.doc,.docx" className={`${field} file:mr-4 file:rounded-md file:border-0 file:bg-pine-900 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white`} />
          </div>
        </>
      ) : null}

      <div className="sm:col-span-2">
        <label htmlFor={`${kind}-message`} className={label}>{careers ? 'Tell us about yourself' : 'Message *'}</label>
        <textarea id={`${kind}-message`} name="message" rows={5} required={!careers} className={field} />
      </div>

      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 text-sm text-ink/80">
          <input type="checkbox" name="sms_consent" value="yes" className="mt-1 h-5 w-5 shrink-0 accent-[#123530]" />
          <span>
            I agree to get text messages from Cynergy about appointments, offers and two-way chat. Message and data rates may apply. Reply HELP for help or STOP to stop. This is optional. See our{' '}
            <a href="/privacy-policy/" className="font-medium text-pine-900 underline underline-offset-4">Privacy Policy</a> and{' '}
            <a href="/terms-of-use/" className="font-medium text-pine-900 underline underline-offset-4">Terms of Use</a>.
          </span>
        </label>
      </div>

      <div className="sm:col-span-2">
        <button type="submit" disabled={state === 'sending'} className="btn btn-primary disabled:opacity-60">
          {state === 'sending' ? 'Sending…' : careers ? 'Send application' : 'Send message'}
        </button>
        {state === 'error' && <p role="alert" className="mt-4 text-sm font-medium text-clay-700">{msg}</p>}
        <p className="mt-4 text-sm text-ink/60">Please do not send private medical details in this form.</p>
      </div>
    </form>
  );
}
