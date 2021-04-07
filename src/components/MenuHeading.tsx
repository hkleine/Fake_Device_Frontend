export function MenuHeading({children}:any) {
  return (
    <div className="flex flex-row justify-between">
        <h1 className="text-gray-700 text-2xl font-medium pb-6">{children}</h1>
    </div>
  );
}