import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <Button href="/" variant="outline">
          <ArrowLeft /> Back to home page
        </Button>
      </div>
      {children}
    </>
  );
}
