export function MenuHeading({children}:any) {
  return (
    <div className="flex flex-row justify-between">
        <h1 className="pb-6">{children}</h1>
    </div>
  );
}