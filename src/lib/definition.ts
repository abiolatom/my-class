export interface ContactFormProps {
  onSubmit: (formData: FormData) => void;
}

export interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  country: string;
    city: string;
    skillLevel: string;
  additionalInfo: string;
}

export const skillLevels = ['New to the language', 'Beginner: I"ve had some intro to it',
    'Intermediate: lived in Finland and can make a finnish sentence', 'Expert: The Boss'] as const;
