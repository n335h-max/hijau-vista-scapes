
import React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Form schema
const customPackageSchema = z.object({
  services: z.array(z.string()).min(1, {
    message: "Please select at least one service",
  }),
});

type CustomPackageFormValues = z.infer<typeof customPackageSchema>;

interface CustomPackageDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedServices: string[];
  onSubmit: (data: CustomPackageFormValues) => void;
}

const CustomPackageDialog: React.FC<CustomPackageDialogProps> = ({
  open,
  setOpen,
  selectedServices,
  onSubmit,
}) => {
  // Form for custom package
  const form = useForm<CustomPackageFormValues>({
    resolver: zodResolver(customPackageSchema),
    defaultValues: {
      services: selectedServices,
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-hijau-blue">Create Your Custom Package</DialogTitle>
          <DialogDescription>
            You've selected {selectedServices.length} service(s) for your custom landscape package.
            You can review and confirm your selections below.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="services"
              render={() => (
                <FormItem>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {selectedServices.map((service) => (
                      <FormField
                        key={service}
                        control={form.control}
                        name="services"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={service}
                              className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(service)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, service])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== service
                                          )
                                        )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal cursor-pointer">
                                {service}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                </FormItem>
              )}
            />
            
            <div className="flex justify-end gap-4">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="bg-hijau-blue hover:bg-hijau-blue/90"
              >
                Book Custom Package
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CustomPackageDialog;
