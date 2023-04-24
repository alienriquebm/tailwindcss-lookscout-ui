import { InfoIcon } from "@/assets/icons";
import { Button, Input } from "@/components";
import { FormProvider, useForm } from "react-hook-form";

type FormValues = {
  name: string;
};

export default function Home() {
  const form = useForm({
    defaultValues: {
      name: "",
    } as FormValues,
  });
  const onSubmit = (data: FormValues) => console.log(data);
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 p-24">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Input
            fullWidth
            label="Name"
            icon={<InfoIcon />}
            name="name"
            placeholder="Enter your name"
            controllerProps={{
              rules: {
                required: "This field is required",
              },
            }}
          />
          <div className="mt-8">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
