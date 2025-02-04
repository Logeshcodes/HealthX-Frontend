import { ReactNode } from "react";


interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children,}: CardProps) {
  return (
    <div className={("rounded-2xl bg-card shadow-lg p-4")}>
      {children}
    </div>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children }: CardContentProps) {
  return (
    <div className={("mt-2 text-muted-foreground")}>
      {children}
    </div>
  );
}
