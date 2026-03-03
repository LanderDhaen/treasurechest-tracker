import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Login to your account</CardTitle>
        <CardDescription className="text-center">
          Enter your credentials below to login
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" type="password" required />
            </Field>
            <Field>
              <Button type="submit">Login</Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
