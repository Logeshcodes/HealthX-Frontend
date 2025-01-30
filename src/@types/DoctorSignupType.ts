export type DoctorRegister = {
    name: string;
    email: string;
    Mobile: string;
    department: string;
    consultationType: string;
    education: string;
    experience: string;
    description: string;
    password: string;
    confirmPassword: string;
    // MedicalLicense:string | File ; // MedicalLicense can be a string or File for uploads
  };
  