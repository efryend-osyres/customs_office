import { Input } from "@/components/ui/input";
import { LucideIcon, Text } from "lucide-react";
import clsx from "clsx";
import { ChangeEventHandler } from "react";

interface CustomInputProps {
    placeholder?: string;
    icon?: LucideIcon;
    disabled?: boolean;
    "aria-invalid"?: boolean;
    value?: string | number;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onClick?: () => void;
    type?: "text" | "password" | "number";
    // Otras propiedades que necesites
}

export function InputText(props: CustomInputProps) {
    const {
        placeholder,
        icon: Icon = Text,
        disabled = false,
        "aria-invalid": ariaInvalid,
        value,
        onChange,
        onClick,
        type = "text",
    } = props;

    return (
        <div
            className={clsx("border rounded-[0.6rem] flex items-center ", {
                "border-gray-500": disabled,
                "border-black": !disabled,
                "!border-brand-primary": ariaInvalid,
            })}>
            <div className="px-2">
                <Icon
                    size={16}
                    className={clsx("", {
                        "stroke-gray-500": disabled,
                        "stroke-black": !disabled,
                    })}
                />
            </div>
            <Input
                {...props}
                type={type}
                value={value}
                onChange={onChange}
                onClick={onClick}
                placeholder={placeholder}
                className="disabled:text-gray-500 border-none placeholder:text-gray-400"
                disabled={disabled}
            />
        </div>
    );
}
