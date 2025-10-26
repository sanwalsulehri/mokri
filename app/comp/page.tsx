import { ThemeToggle } from "../../components/theme-toggle";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/badge";
export default function page() {
  return (
    <div className="min-h-screen space-y-10">
      <ThemeToggle />
      <h1>Components</h1>
      <Button>Click me</Button>
      <Button bg={false}>Click me</Button>
      <Button bg={false} className="text-red-500">
        Click me
      </Button>
      <div className="">
        <Badge>Click me</Badge>
        <Badge bg={false}>Click me</Badge>
        <Badge variant="secondary">Click me</Badge>
        <Badge variant="destructive">Click me</Badge>
      </div>
    </div>
  );
}
