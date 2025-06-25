import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

interface WaitlistFormProps {
  className?: string;
  buttonClassName?: string;
  inputClassName?: string;
  successMessage?: string;
  errorMessage?: string;
  placeholder?: string;
  buttonText?: string;
  loadingText?: string;
}

export const WaitlistForm = ({
  className = "",
  buttonClassName = "",
  inputClassName = "",
  successMessage,
  errorMessage,
  placeholder,
  buttonText,
  loadingText,
}: WaitlistFormProps) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Use provided props or fall back to translations
  const finalSuccessMessage = successMessage || t("home.cta.waitlist.successMessage");
  const finalErrorMessage = errorMessage || t("home.cta.waitlist.errorMessage");
  const finalPlaceholder = placeholder || t("home.cta.waitlist.placeholder");
  const finalButtonText = buttonText || t("home.cta.waitlist.buttonText");
  const finalLoadingText = loadingText || t("home.cta.waitlist.loadingText");

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Replace with your Tally endpoint
    fetch("https://tally.so/forms/mN92qp/submissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitStatus("success");
          setEmail("");
        } else {
          setSubmitStatus("error");
        }
      })
      .catch(() => {
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-4 sm:flex-row sm:items-start ${className}`}
    >
      <div className='flex-1'>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={finalPlaceholder}
          className={`focus:ring-accent-500 w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder-gray-400 outline-1 outline-gray-400 focus:ring-2 focus:outline-none ${inputClassName}`}
          required
          aria-label='Email address'
          disabled={isSubmitting}
          aria-invalid={submitStatus === "error"}
          aria-describedby={submitStatus === "error" ? "email-error" : undefined}
        />
        {submitStatus === "error" && (
          <p id='email-error' className='mt-2 text-sm text-red-500'>
            {finalErrorMessage}
          </p>
        )}
        {submitStatus === "success" && (
          <p className='mt-2 text-sm text-green-500'>{finalSuccessMessage}</p>
        )}
      </div>
      <Button
        disabled={isSubmitting}
        containerClassName={`bg-accent-500 hover:bg-accent-600 rounded-lg px-6 py-3 whitespace-nowrap sm:flex-shrink-0 ${buttonClassName}`}
        textClassName='text-white'
      >
        {isSubmitting ? finalLoadingText : finalButtonText}
      </Button>
    </form>
  );
};
