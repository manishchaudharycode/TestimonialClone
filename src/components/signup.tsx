import { Button } from "./ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export function SigUpFrom() {
  return (
    <Card className="w-full max-w-sm text-white">
      <CardHeader>
        <CardTitle>
          <div className="flex items-center">
            <input type="checkbox"/>
            <h1 className="ml-2">SignUp to your account </h1>
          </div>
        </CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <a href="/signin">Login</a>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6 ">
            <Button variant="outline" className="w-full">
          Sign Up with Google
        </Button>
            <div className="grid gap-2">
              <Label htmlFor="Name">Name</Label>
              <Input
              className="text-white"
                id="Name"
                type="Name"
                placeholder="Name"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="bg-neutral-400 px-15 py-6">
          Sign Up
        </Button>
      </CardFooter>
    </Card>
  )
}
