import Image from "next/image";
import { cn } from "@/shared/lib/utils";

export type BrandLogoVariant = "full" | "icon" | "responsive";
export type BrandLogoSize = "sm" | "md" | "lg";

interface BrandLogoProps {
  variant?: BrandLogoVariant;
  size?: BrandLogoSize;
  priority?: boolean;
  className?: string;
  alt?: string;
}

const FULL_HEIGHT_CLASS: Record<BrandLogoSize, string> = {
  sm: "h-6",
  md: "h-7 sm:h-8",
  lg: "h-9 sm:h-10",
};

const ICON_SIZE_CLASS: Record<BrandLogoSize, string> = {
  sm: "h-6 w-6",
  md: "h-7 w-7 sm:h-8 sm:w-8",
  lg: "h-11 w-11 md:h-12 md:w-12",
};

export const BrandLogo = ({
  variant = "full",
  size = "md",
  priority = false,
  className,
  alt = "DashCraft",
}: BrandLogoProps) => {
  const fullHeight = FULL_HEIGHT_CLASS[size];
  const iconSize = ICON_SIZE_CLASS[size];

  if (variant === "icon") {
    return (
      <span className={cn("inline-flex items-center shrink-0", className)}>
        <Image
          src="/icon.svg"
          alt={alt}
          width={360}
          height={360}
          priority={priority}
          unoptimized
          className={cn("object-contain dark:hidden", iconSize)}
        />
        <Image
          src="/icon-dark.svg"
          alt={alt}
          width={360}
          height={360}
          priority={priority}
          unoptimized
          className={cn("hidden object-contain dark:block", iconSize)}
        />
      </span>
    );
  }

  if (variant === "responsive") {
    return (
      <span className={cn("inline-flex items-center shrink-0", className)}>
        <Image
          src="/icon.svg"
          alt={alt}
          width={360}
          height={360}
          priority={priority}
          unoptimized
          className={cn("sm:hidden object-contain dark:hidden", iconSize)}
        />
        <Image
          src="/icon-dark.svg"
          alt={alt}
          width={360}
          height={360}
          priority={priority}
          unoptimized
          className={cn(
            "hidden dark:block dark:sm:hidden object-contain",
            iconSize,
          )}
        />

        <Image
          src="/logo.png"
          alt={alt}
          width={848}
          height={160}
          priority={priority}
          className={cn(
            "hidden sm:block dark:hidden w-auto object-contain",
            fullHeight,
          )}
        />
        <Image
          src="/logo-dark.png"
          alt={alt}
          width={848}
          height={160}
          priority={priority}
          className={cn(
            "hidden dark:sm:block w-auto object-contain",
            fullHeight,
          )}
        />
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center shrink-0", className)}>
      <Image
        src="/logo.png"
        alt={alt}
        width={848}
        height={160}
        priority={priority}
        className={cn("w-auto object-contain dark:hidden", fullHeight)}
      />
      <Image
        src="/logo-dark.png"
        alt={alt}
        width={848}
        height={160}
        priority={priority}
        className={cn("hidden w-auto object-contain dark:block", fullHeight)}
      />
    </span>
  );
};
