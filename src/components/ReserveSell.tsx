import ReserveButton from "./ReserveButton";

const ReserveSell = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <p>For $20, you can reserve your spot:</p>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center gap-0">
          <ul className="list-disc list-inside">
            <li>
              <span>Reward</span> <span>1 of 20</span>
            </li>
            <li>
              <span>Discount</span> <span>2 of 20</span>
            </li>
          </ul>
        </div>
        <ReserveButton buttonText="Reserve now" />
      </div>
    </div>
  );
};

export { ReserveSell };
