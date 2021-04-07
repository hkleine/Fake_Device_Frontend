export const JsonBuilderViewer = ({data}:any) => {
    console.log(data);
    return (
        <pre className="bg-gray-900 text-gray-300 rounded-lg shadow-sm">
            {JSON.stringify(data, null, 2)}
        </pre>
    );
}