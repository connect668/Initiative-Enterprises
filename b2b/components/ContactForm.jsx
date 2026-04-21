import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    focus: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", formData);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-white/45">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/25"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-white/45">
            Company
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company name"
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/25"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-white/45">
            Role
          </label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Area Coach, GM, Owner..."
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/25"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-white/45">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/25"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-white/45">
          Primary Focus
        </label>
        <select
          name="focus"
          value={formData.focus}
          onChange={handleChange}
          className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none"
        >
          <option value="">Select a focus</option>
          <option value="oss">OSS</option>
          <option value="guardian">Guardian Support</option>
          <option value="checkpoint">Checkpoint Media</option>
          <option value="pilot">30-Day Pilot</option>
        </select>
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-xs uppercase tracking-[0.22em] text-white/45">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="What are you trying to improve?"
          className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/25"
        />
      </div>

      <button
        type="submit"
        className="mt-6 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
      >
        Submit Inquiry
      </button>
    </form>
  );
}
