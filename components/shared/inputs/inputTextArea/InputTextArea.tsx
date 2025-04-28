import { LucideIcon, Text } from "lucide-react";
import clsx from "clsx";
import { Textarea } from "@/components/ui/textarea";

interface CustomInputProps {
    placeholder?: string;
    icon?: LucideIcon;
    disabled?: boolean;
    "aria-invalid"?: boolean;
    value?: string | number;
    rows?: number;
    // Otras propiedades que necesites
}

export function InputTextArea(props: CustomInputProps) {
    const {
        placeholder,
        icon: Icon = Text,
        disabled = false,
        "aria-invalid": ariaInvalid,
        value,
        rows = 3,
    } = props;

    return (
        <div
            className={clsx("border rounded-[0.6rem] flex", {
                "border-gray-500": disabled,
                "border-black": !disabled,
                "!border-brand-primary": ariaInvalid,
            })}>
            <div className="px-2 mt-2.5">
                <Icon
                    size={16}
                    className={clsx("", {
                        "stroke-gray-500": disabled,
                        "stroke-black": !disabled,
                    })}
                />
            </div>
            <Textarea
                {...props}
                rows={rows}
                value={value}
                placeholder={placeholder}
                className="disabled:text-gray-500 border-none placeholder:text-gray-400"
                disabled={disabled}
            />
        </div>
    );
}
