import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div>
      <div className="flex justify-center py-24">
        <SignUp />
      </div>
    </div>
  );
}
