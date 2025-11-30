import { cn } from "@/lib/utils";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "error" | "warning" | "info";
}

export function Alert({ className, variant = "default", children, ...props }: AlertProps) {
  return (
    <div
      className={cn(
        "rounded-lg border p-4",
        {
          "bg-blue-50 border-blue-200 text-blue-800": variant === "info",
          "bg-green-50 border-green-200 text-green-800": variant === "success",
          "bg-red-50 border-red-200 text-red-800": variant === "error",
          "bg-yellow-50 border-yellow-200 text-yellow-800": variant === "warning",
          "bg-gray-50 border-gray-200 text-gray-800": variant === "default",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

