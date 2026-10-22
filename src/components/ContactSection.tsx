import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Phone,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ProfileInfo, ContactMessage } from '../types/portfolio';

interface ContactSectionProps {
  profile: ProfileInfo;
  isDark: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  profile,
  isDark,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#facc15', '#eab308', '#ca8a04', '#ffffff', '#000000'],
      });

      // Reset form after short delay or show success state
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 700);
  };

  const contactCards = [
    {
      id: 'email',
      label: 'Email Address',
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: <Mail className="w-5 h-5" />,
      actionType: 'copy',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn Profile',
      value: 'linkedin.com/in/dureksharangala',
      href: profile.linkedin,
      icon: <Linkedin className="w-5 h-5 text-[#e6ecf1]" />,
      actionType: 'link',
    },
    {
      id: 'github',
      label: 'GitHub Profile',
      value: 'github.com/durekshaarangala',
      href: profile.github,
      icon: <Github className="w-5 h-5" />,
      actionType: 'link',
    },
    {
      id: 'phone',
      label: 'Phone Number',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, '')}`,
      icon: <Phone className="w-5 h-5" />,
      actionType: 'copy',
    },
  ];

  const findMeMore = [
    {
      id: 'github-find',
      name: 'GitHub',
      handle: '@durekshachammi',
      description: 'Repositories, open source PRs & notebooks',
      url: profile.github,
      icon: <Github className="w-5 h-5" />,
    },
    {
      id: 'linkedin-find',
      name: 'LinkedIn',
      handle: 'durekshachammi',
      description: 'Professional networking & industry updates',
      url: profile.linkedin,
      icon: <Linkedin className="w-5 h-5 text-[#0A66C2]" />,
    },
    {
      id: 'mslearn-find',
      name: 'MS (Microsoft Learn)',
      handle: 'durekshachammi',
      description: 'Azure AI certifications & cloud badges',
      url: profile.msLearn,
      icon: (
        <div className="w-5 h-5 rounded-md bg-[#0078D4] text-white flex items-center justify-center font-bold text-[10px]">
          MS
        </div>
      ),
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with "Let's Talk" */}
        <div className="flex flex-col items-start mb-14">
          <span
            className={`text-xs uppercase tracking-widest font-bold mb-2 ${
              isDark ? 'text-yellow-400' : 'text-yellow-600'
            }`}
          >
            Get In Touch
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-heading font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Let's Talk
          </h2>
          <div
            className={`h-1 w-16 mt-3 rounded-full ${
              isDark ? 'bg-yellow-400' : 'bg-yellow-500'
            }`}
          />
          <p
            className={`text-sm sm:text-base mt-4 max-w-xl ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            Whether you have an exciting AI engineering role, a machine learning research collaboration, or an ambitious data project — my inbox is always open.
          </p>
        </div>

        {/* Main 2-Column Split: Contact & Social Cards (Left) vs Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Side: Email, LinkedIn, GitHub, Phone Cards + "Find Me More" Cards */}
          <div className="lg:col-span-6 space-y-8">
            {/* Direct Contact Cards Grid */}
            <div>
              <span
                className={`text-xs uppercase tracking-wider font-semibold block mb-4 ${
                  isDark ? 'text-neutral-400' : 'text-neutral-500'
                }`}
              >
                Direct Channels
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactCards.map((card) => {
                  const isCopied = copiedField === card.id;

                  return (
                    <div
                      key={card.id}
                      className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                        isDark
                          ? 'bg-neutral-900/80 border-neutral-800 hover:border-yellow-400/50'
                          : 'bg-white border-neutral-200 hover:border-yellow-500/60 shadow-sm'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div
                            className={`p-2 rounded-xl ${
                              isDark ? 'bg-neutral-800 text-yellow-400' : 'bg-yellow-50 text-yellow-600'
                            }`}
                          >
                            {card.icon}
                          </div>

                          {card.actionType === 'copy' ? (
                            <button
                              onClick={() => handleCopy(card.value, card.id)}
                              className={`p-1.5 rounded-lg text-xs font-medium border transition-colors flex items-center gap-1 ${
                                isDark
                                  ? 'border-neutral-700 text-neutral-400 hover:text-white'
                                  : 'border-neutral-200 text-neutral-500 hover:text-neutral-900'
                              }`}
                              title={`Copy ${card.label}`}
                            >
                              {isCopied ? (
                                <Check className="w-3.5 h-3.5 text-yellow-400" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                              <span className="text-[10px]">
                                {isCopied ? 'Copied' : 'Copy'}
                              </span>
                            </button>
                          ) : (
                            <a
                              href={card.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`p-1.5 rounded-lg text-xs font-medium border transition-colors ${
                                isDark
                                  ? 'border-neutral-700 text-neutral-400 hover:text-yellow-400 hover:border-yellow-400'
                                  : 'border-neutral-200 text-neutral-500 hover:text-yellow-700 hover:border-yellow-500'
                              }`}
                              title={`Open ${card.label}`}
                            >
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>

                        <span
                          className={`text-xs block font-semibold uppercase tracking-wider ${
                            isDark ? 'text-neutral-500' : 'text-neutral-400'
                          }`}
                        >
                          {card.label}
                        </span>
                        <a
                          href={card.href}
                          target={card.actionType === 'link' ? '_blank' : undefined}
                          rel={card.actionType === 'link' ? 'noopener noreferrer' : undefined}
                          className={`font-semibold text-xs sm:text-sm mt-1 block truncate transition-colors ${
                            isDark
                              ? 'text-neutral-200 hover:text-yellow-400'
                              : 'text-neutral-800 hover:text-yellow-700'
                          }`}
                        >
                          {card.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* "Find Me More" Separate Cards as explicitly requested */}
            <div>
              <span
                className={`text-xs uppercase tracking-wider font-semibold block mb-4 ${
                  isDark ? 'text-neutral-400' : 'text-neutral-500'
                }`}
              >
                Find Me More
              </span>

              <div className="space-y-3">
                {findMeMore.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                      isDark
                        ? 'bg-neutral-900/60 border-neutral-800 hover:border-yellow-400/40 hover:bg-neutral-900'
                        : 'bg-white border-neutral-200 hover:border-yellow-500/50 hover:bg-yellow-50/20 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`p-2 rounded-lg ${
                          isDark ? 'bg-neutral-800' : 'bg-neutral-100'
                        }`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4
                            className={`font-heading font-bold text-sm ${
                              isDark ? 'text-white' : 'text-neutral-900'
                            }`}
                          >
                            {item.name}
                          </h4>
                          <span
                            className={`text-xs font-mono ${
                              isDark ? 'text-yellow-400' : 'text-yellow-600'
                            }`}
                          >
                            {item.handle}
                          </span>
                        </div>
                        <p
                          className={`text-xs ${
                            isDark ? 'text-neutral-400' : 'text-neutral-600'
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-semibold text-yellow-500 group-hover:translate-x-1 transition-transform">
                      <span>Connect</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Message Form (Name, Email Address, Message, Send Message button) */}
          <div className="lg:col-span-6">
            <div
              className={`p-7 sm:p-9 rounded-3xl border transition-all ${
                isDark
                  ? 'bg-neutral-900/90 border-neutral-800 shadow-xl'
                  : 'bg-white border-neutral-200 shadow-lg'
              }`}
            >
              <div className="flex items-center gap-2.5 mb-6">
                <MessageSquare
                  className={`w-5 h-5 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}
                />
                <h3
                  className={`text-xl font-heading font-bold ${
                    isDark ? 'text-white' : 'text-neutral-900'
                  }`}
                >
                  Send a Direct Message
                </h3>
              </div>

              {submitted ? (
                <div
                  className={`p-6 rounded-2xl border text-center space-y-3 ${
                    isDark
                      ? 'bg-yellow-400/10 border-yellow-400/30 text-neutral-100'
                      : 'bg-yellow-50 border-yellow-200 text-neutral-900'
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-yellow-400 text-black flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-lg">
                    Thank You! Message Dispatched
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-400 max-w-sm mx-auto">
                    Your message has been received. I normally respond to high-priority engineering inquiries within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 text-xs font-semibold px-4 py-2 rounded-lg bg-neutral-800 text-yellow-400 hover:bg-neutral-700 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                        isDark ? 'text-neutral-300' : 'text-neutral-700'
                      }`}
                    >
                      Your Name <span className="text-yellow-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl text-sm border transition-all outline-none focus:ring-2 ${
                        isDark
                          ? 'bg-neutral-950 border-neutral-700 text-white placeholder-neutral-500 focus:border-yellow-400 focus:ring-yellow-400/20'
                          : 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-yellow-500 focus:ring-yellow-500/20'
                      }`}
                    />
                  </div>

                  {/* Email Address Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                        isDark ? 'text-neutral-300' : 'text-neutral-700'
                      }`}
                    >
                      Email Address <span className="text-yellow-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. sarah.jenkins@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl text-sm border transition-all outline-none focus:ring-2 ${
                        isDark
                          ? 'bg-neutral-950 border-neutral-700 text-white placeholder-neutral-500 focus:border-yellow-400 focus:ring-yellow-400/20'
                          : 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-yellow-500 focus:ring-yellow-500/20'
                      }`}
                    />
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label
                      htmlFor="subject"
                      className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                        isDark ? 'text-neutral-300' : 'text-neutral-700'
                      }`}
                    >
                      Subject / Topic (Optional)
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="e.g. AI Engineering Collaboration"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl text-sm border transition-all outline-none focus:ring-2 ${
                        isDark
                          ? 'bg-neutral-950 border-neutral-700 text-white placeholder-neutral-500 focus:border-yellow-400 focus:ring-yellow-400/20'
                          : 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-yellow-500 focus:ring-yellow-500/20'
                      }`}
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${
                        isDark ? 'text-neutral-300' : 'text-neutral-700'
                      }`}
                    >
                      Your Message <span className="text-yellow-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Tell me about your project, team, or opportunity..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl text-sm border transition-all outline-none focus:ring-2 resize-none ${
                        isDark
                          ? 'bg-neutral-950 border-neutral-700 text-white placeholder-neutral-500 focus:border-yellow-400 focus:ring-yellow-400/20'
                          : 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-yellow-500 focus:ring-yellow-500/20'
                      }`}
                    />
                  </div>

                  {/* Send Message Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3.5 px-6 rounded-xl text-sm font-semibold flex items-center justify-center gap-2.5 transition-all shadow-lg active:scale-95 ${
                      isDark
                        ? 'bg-yellow-400 text-black hover:bg-yellow-300 shadow-yellow-500/20'
                        : 'bg-yellow-500 text-black hover:bg-yellow-400 shadow-yellow-600/20'
                    }`}
                  >
                    <Send
                      className={`w-4 h-4 ${isSubmitting ? 'animate-spin' : ''}`}
                    />
                    <span>
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
