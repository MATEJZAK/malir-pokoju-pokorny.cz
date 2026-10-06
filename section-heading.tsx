export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: {
  id: string
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
      <p className="mb-3 text-sm font-semibold tracking-wider text-accent uppercase">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  )
}
