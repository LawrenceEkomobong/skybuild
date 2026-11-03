import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from './Button';
import { ContactFormData } from '../types';

interface ContactFormProps {
  initialService?: string;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialService = '',
  className = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceRequired: initialService || '',
    projectLocation: '',
    estimatedBudget: '',
    projectDescription: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const servicesList = [
    'Building Construction',
    'Civil Engineering',
    'Renovation & Remodeling',
    'Structural Works',
    'Roofing & Exterior Works',
    'Road & Drainage Construction',
    'Project Management',
    'Property Maintenance',
    'Other / General Inquiries',
  ];

  const budgetRanges = [
    'Under ₦50,000,000 / $30,000',
    '₦50,000,000 – ₦250,000,000 / $30,000 – $150,000',
    '₦250,000,000 – ₦1,000,000,000 / $150,000 – $650,000',
    '₦1,000,000,000+ / $650,000+ (Large Enterprise / Infrastructure)',
    'Budget Pending Engineering Feasibility / BOQ',
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Please enter a valid full name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = 'Please enter a valid telephone number';
    }

    if (!formData.serviceRequired) {
      newErrors.serviceRequired = 'Please select a service category';
    }

    if (!formData.projectLocation.trim()) {
      newErrors.projectLocation = 'Project location / site city is required';
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please provide a brief description of your project scope';
    } else if (formData.projectDescription.trim().length < 20) {
      newErrors.projectDescription = 'Description should be at least 20 characters for our engineering team to assess';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Realistic API submission simulation
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const generatedRef = `SB-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
      setReferenceId(generatedRef);
      setIsSuccess(true);
    } catch {
      setErrors({ fullName: 'A network error occurred. Please try again or call our office directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      serviceRequired: '',
      projectLocation: '',
      estimatedBudget: '',
      projectDescription: '',
    });
    setErrors({});
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <div className={`bg-white border border-slate-200 rounded-none p-8 sm:p-10 shadow-xs text-center ${className}`}>
        <div className="w-14 h-14 rounded-none bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-5 text-emerald-600">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
          INQUIRY LOGGED SUCCESSFULLY
        </span>
        <h3 className="text-2xl sm:text-3xl font-black uppercase text-slate-900 mt-1 mb-2">
          Thank You, {formData.fullName}
        </h3>
        <p className="text-slate-600 max-w-md mx-auto text-xs sm:text-sm leading-relaxed">
          Your project inquiry has been received by our senior quantity surveying and engineering desk. A project manager will review your parameters and reach out within 24 business hours.
        </p>

        <div className="mt-6 p-5 rounded-none bg-slate-50 border border-slate-200 inline-block text-left max-w-sm w-full">
          <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">Inquiry Reference ID</div>
          <div className="text-xl font-mono font-black text-slate-900 mt-0.5">{referenceId}</div>
          <div className="mt-3 pt-3 border-t border-slate-200 text-xs text-slate-600 space-y-1">
            <div><span className="font-bold text-slate-900 uppercase text-[10px] font-mono tracking-wider">Service:</span> {formData.serviceRequired}</div>
            <div><span className="font-bold text-slate-900 uppercase text-[10px] font-mono tracking-wider">Location:</span> {formData.projectLocation}</div>
          </div>
        </div>

        <div className="mt-8">
          <Button variant="secondary" size="md" onClick={handleReset} icon={<RefreshCw className="w-4 h-4" />}>
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`bg-white border border-slate-200 rounded-none p-6 sm:p-8 md:p-10 shadow-xs ${className}`}
    >
      <div className="border-b border-slate-200 pb-5 mb-6">
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-600 block mb-1">
          PROJECT SCOPE INTAKE
        </span>
        <h3 className="text-xl sm:text-2xl font-black uppercase text-slate-900 tracking-tight">
          Request a Project Consultation & Quote
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Provide your project requirements below. Our engineering and estimating team will follow up promptly.
        </p>
      </div>

      <div className="space-y-5">
        {/* Full Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="fullName" className="block text-[10px] font-mono font-bold text-slate-800 uppercase tracking-widest mb-2">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Engr. Michael Adeyemi"
              className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-none border bg-slate-50 text-slate-900 focus:bg-white focus:outline-none transition-colors ${
                errors.fullName
                  ? 'border-rose-400 focus:border-rose-600'
                  : 'border-slate-300 focus:border-slate-950'
              }`}
            />
            {errors.fullName && (
              <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-[10px] font-mono font-bold text-slate-800 uppercase tracking-widest mb-2">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. michael@example.com"
              className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-none border bg-slate-50 text-slate-900 focus:bg-white focus:outline-none transition-colors ${
                errors.email
                  ? 'border-rose-400 focus:border-rose-600'
                  : 'border-slate-300 focus:border-slate-950'
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Phone & Service Required */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-[10px] font-mono font-bold text-slate-800 uppercase tracking-widest mb-2">
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +234 802 000 0000"
              className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-none border bg-slate-50 text-slate-900 focus:bg-white focus:outline-none transition-colors ${
                errors.phone
                  ? 'border-rose-400 focus:border-rose-600'
                  : 'border-slate-300 focus:border-slate-950'
              }`}
            />
            {errors.phone && (
              <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="serviceRequired" className="block text-[10px] font-mono font-bold text-slate-800 uppercase tracking-widest mb-2">
              Service Required <span className="text-rose-500">*</span>
            </label>
            <select
              id="serviceRequired"
              name="serviceRequired"
              value={formData.serviceRequired}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-none border bg-slate-50 text-slate-900 focus:bg-white focus:outline-none transition-colors ${
                errors.serviceRequired
                  ? 'border-rose-400 focus:border-rose-600'
                  : 'border-slate-300 focus:border-slate-950'
              }`}
            >
              <option value="">Select a service category...</option>
              {servicesList.map((srv) => (
                <option key={srv} value={srv}>
                  {srv}
                </option>
              ))}
            </select>
            {errors.serviceRequired && (
              <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.serviceRequired}
              </p>
            )}
          </div>
        </div>

        {/* Project Location & Estimated Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="projectLocation" className="block text-[10px] font-mono font-bold text-slate-800 uppercase tracking-widest mb-2">
              Project Location / Site City <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="projectLocation"
              name="projectLocation"
              value={formData.projectLocation}
              onChange={handleChange}
              placeholder="e.g. Lekki Phase 1, Lagos / Abuja FCT"
              className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-none border bg-slate-50 text-slate-900 focus:bg-white focus:outline-none transition-colors ${
                errors.projectLocation
                  ? 'border-rose-400 focus:border-rose-600'
                  : 'border-slate-300 focus:border-slate-950'
              }`}
            />
            {errors.projectLocation && (
              <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {errors.projectLocation}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="estimatedBudget" className="block text-[10px] font-mono font-bold text-slate-800 uppercase tracking-widest mb-2">
              Estimated Budget Range
            </label>
            <select
              id="estimatedBudget"
              name="estimatedBudget"
              value={formData.estimatedBudget}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-none border border-slate-300 bg-slate-50 text-slate-900 focus:bg-white focus:outline-none focus:border-slate-950 transition-colors"
            >
              <option value="">Select budget range (optional)...</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Project Description */}
        <div>
          <label htmlFor="projectDescription" className="block text-[10px] font-mono font-bold text-slate-800 uppercase tracking-widest mb-2">
            Project Description & Scope Details <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            rows={4}
            value={formData.projectDescription}
            onChange={handleChange}
            placeholder="Describe the nature of work, building type, approximate square meters, current stage (raw land, architectural design ready, or remodeling), and expected timeline..."
            className={`w-full px-4 py-3 text-xs sm:text-sm rounded-none border bg-slate-50 text-slate-900 focus:bg-white focus:outline-none transition-colors ${
              errors.projectDescription
                ? 'border-rose-400 focus:border-rose-600'
                : 'border-slate-300 focus:border-slate-950'
            }`}
          />
          {errors.projectDescription && (
            <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              {errors.projectDescription}
            </p>
          )}
        </div>

        {/* Submit action */}
        <div className="pt-3">
          <Button
            type="submit"
            variant="accent"
            size="lg"
            className="w-full sm:w-auto"
            isLoading={isSubmitting}
            icon={<Send className="w-4 h-4" />}
          >
            Submit Request
          </Button>
          <p className="text-[11px] text-slate-500 mt-3 leading-normal">
            All submitted project blueprints, commercial briefs, and technical specifications are protected under our client confidentiality agreement.
          </p>
        </div>
      </div>
    </form>
  );
};
