import ReserveButton from "./ReserveButton";

const ReserveSell = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-0">
      <p>For $20, you can reserve your spot:</p>
      <ReserveButton buttonText="Reserve now" />
    </div>
  );
};

export { ReserveSell };
