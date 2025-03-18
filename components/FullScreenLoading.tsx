import Spinner from "./Spinner";

export default function FullScreenLoading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <Spinner />
    </div>
  );
}
