function WindowControls({ variant = "macos", headerStyle = "full" }) {
  const sizeClasses = "size-2"

  if (variant === "macos" || variant === "safari") {
    const dotColors =
      headerStyle === "minimal"
        ? {
            red: "bg-muted border  border-foreground/20",
            yellow: "bg-muted border border-foreground/20",
            green: "bg-muted border border-foreground/20",
          }
        : {
            red: "bg-red-500 hover:bg-red-600 border border-foreground/20",
            yellow:
              "bg-yellow-500 hover:bg-yellow-600 border border-foreground/20",
            green:
              "bg-green-500 hover:bg-green-600 border border-foreground/20 ",
          }

    return (
      <div className="flex gap-2">
        <div
          className={`size-2 rounded-full ${dotColors.red} transition-colors cursor-pointer flex items-center justify-center group`}
        >
          {headerStyle !== "minimal" && (
            <div className="w-1.5 h-0.5 bg-red-900/60 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          )}
        </div>
        <div
          className={`size-2 rounded-full ${dotColors.yellow} transition-colors cursor-pointer flex items-center justify-center group`}
        >
          {headerStyle !== "minimal" && (
            <div className="w-1.5 h-0.5 bg-yellow-900/60 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          )}
        </div>
        <div
          className={`size-2 rounded-full ${dotColors.green} transition-colors cursor-pointer flex items-center justify-center group`}
        >
          {headerStyle !== "minimal" && (
            <div className="w-1 h-1 border border-green-900/60 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          )}
        </div>
      </div>
    )
  }

  if (variant === "chrome") {
    return (
      <div className="flex gap-1.5">
        <div className={`${sizeClasses} rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer`}></div>
        <div className={`${sizeClasses} rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer`}></div>
        <div className={`${sizeClasses} rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer`}></div>
      </div>
    )
  }

  return (
    <div className="flex gap-1.5">
      <div className={`${sizeClasses} rounded-full border border-foreground/20 bg-foreground/10`}></div>
      <div className={`${sizeClasses} rounded-full border border-foreground/20 bg-foreground/10`}></div>
      <div className={`${sizeClasses} rounded-full border border-foreground/20 bg-foreground/10`}></div>
    </div>
  )
}

function AddressBar({ url = "https://example.com", secure = true, variant = "chrome", className = "" }) {
  const variantStyles = {
    chrome:
      "bg-muted/30 rounded-full border border-foreground/5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.03)_inset] backdrop-blur-sm",
    safari:
      "bg-muted/20 rounded-lg border border-foreground/5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.03)_inset] backdrop-blur-sm",
  }

  const iconColors = {
    chrome: "text-muted-foreground/60",
    safari: "text-muted-foreground/60",
  }

  return (
    <div className={`flex-1 flex justify-center ${className}`}>
      <div
        className={`${variantStyles[variant]} px-4 py-2 text-xs text-muted-foreground/70 min-w-[200px] max-w-md flex items-center gap-2 transition-colors`}
      >
        {secure && (
          <div className={`w-3 h-3 ${iconColors[variant]}`}>
            <svg viewBox="0 0 12 12" fill="currentColor">
              <title>Secure</title>
              <path d="M6 1a2.5 2.5 0 0 1 2.5 2.5V5h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h.5V3.5A2.5 2.5 0 0 1 6 1z" />
            </svg>
          </div>
        )}
        <span className="truncate">{url}</span>
      </div>
    </div>
  )
}

export function BrowserWindow({
  children,
  className = "",
  size = "md",
  headerStyle = "minimal",
  variant = "generic",
  theme = "auto",
  url,
}) {
  const sizeClasses = {
    sm: "h-64 max-w-sm",
    md: "h-80 max-w-2xl",
    lg: "h-96 max-w-4xl",
    xl: "h-[32rem] max-w-6xl",
  }

  const getHeaderStyles = () => {
    const baseStyles = "h-11 border-b border-foreground/5 flex items-center px-4"

    if (variant === "chrome") {
      return `${baseStyles} bg-muted/10 overflow-hidden`
    }

    if (variant === "safari") {
      return `${baseStyles} bg-muted/10 overflow-hidden border-b border-border/30`
    }

    return `${baseStyles} bg-muted/20`
  }

  return (
    <div
      className={`relative rounded-2xl border shadow-[0px_1px_1px_0px_rgba(0,_0,_0,_0.05),_0px_1px_1px_0px_rgba(255,_252,_240,_0.5)_inset,_0px_0px_0px_1px_hsla(0,_0%,_100%,_0.1)_inset,_0px_0px_1px_0px_rgba(28,_27,_26,_0.5)] dark:shadow-[0px_1px_1px_0px_rgba(0,_0,_0,_0.2),_0px_1px_1px_0px_rgba(0,_0,_0,_0.3)_inset,_0px_0px_0px_1px_hsla(0,_0%,_0%,_0.2)_inset,_0px_0px_1px_0px_rgba(255,_255,_255,_0.1)] bg-background border-border ${sizeClasses[size]} ${className} flex flex-col`}
      data-theme={theme === "auto" ? undefined : theme}
    >
      <div className={getHeaderStyles()}>
        <WindowControls variant={variant === "generic" ? "macos" : variant} headerStyle={headerStyle} />

        {headerStyle === "full" && (
          <AddressBar url={url} variant={variant === "generic" ? "chrome" : variant} className="ml-4" />
        )}
      </div>

      <div className="flex flex-1 h-0">
        <div className="flex-1 relative min-w-0 h-full">{children}</div>
      </div>
    </div>
  )
}
