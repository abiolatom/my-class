export interface ContactFormProps {
  onSubmit: (formData: FormData) => void;
}

export interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  country: string;
  city: string;
  additionalInfo: string;
}
