"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
// import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { InputText } from "@/components/shared/inputs/inputText";
import { Loader, Mail, MessageCircle, Phone, User } from "lucide-react";
import { InputTextArea } from "@/components/shared/inputs/inputTextArea";
import { useTransition } from "react";
import clsx from "clsx";

const formSchema = z.object({
    name: z.string().min(1, { message: "Campo requerido" }),
    phone: z.string().min(1, { message: "Campo requerido" }),
    email: z.string().min(1, { message: "Campo requerido" }),
    message: z.string().min(1, { message: "Campo requerido" }),
});

export function ContactForm() {
    const [isPending, startTransition] = useTransition();
    // const router = useRouter();
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        startTransition(async () => {
            const response = await fetch("/api/contact/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: values.name,
                    phone: values.phone,
                    email: values.email,
                    message: values.message,
                }),
            });

            if (response?.status === 200) {
                form.reset();
                toast({
                    title: "Mensaje enviado con éxito, en breve nos comunicaremos contigo.",
                    variant: "destructive",
                });
            } else {
                const error = await response.json();
                toast({
                    title: error,
                    variant: "destructive",
                });
            }
        });
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nombre</FormLabel>
                            <FormControl>
                                <InputText
                                    {...field}
                                    placeholder="Ingresa tu nombre"
                                    icon={User}
                                />
                            </FormControl>

                            <FormMessage className="text-xs text-brand-primary" />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Teléfono</FormLabel>
                            <FormControl>
                                <InputText
                                    {...field}
                                    placeholder="Ingresa tu teléfono"
                                    icon={Phone}
                                />
                            </FormControl>

                            <FormMessage className="text-xs text-brand-primary" />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Correo</FormLabel>
                            <FormControl>
                                <InputText
                                    {...field}
                                    placeholder="Ingresa tu correo"
                                    icon={Mail}
                                />
                            </FormControl>

                            <FormMessage className="text-xs text-brand-primary" />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Dejanos tu mensaje</FormLabel>
                            <FormControl>
                                <InputTextArea
                                    {...field}
                                    placeholder="Escribe tu mensaje"
                                    icon={MessageCircle}
                                />
                            </FormControl>

                            <FormMessage className="text-xs text-brand-primary" />
                        </FormItem>
                    )}
                />

                <div className="pt-16">
                    <Button
                        type="submit"
                        className="relative w-fit bg-brand-tertiary text-white text-xl font-NokoraBold py-6 px-10 rounded-[0.8rem] hover:bg-brand-primary">
                        <span
                            className={clsx("", {
                                invisible: isPending,
                                block: !isPending,
                            })}>
                            Enviar
                        </span>
                        <div
                            className={clsx(
                                "absolute w-full h-full top-0 left-0 justify-center items-center flex",
                                {
                                    hidden: !isPending,
                                    flex: isPending,
                                }
                            )}>
                            <Loader
                                size={20}
                                className="stroke-white animate-spin"
                            />
                        </div>
                    </Button>
                </div>
            </form>
        </Form>
    );
}
