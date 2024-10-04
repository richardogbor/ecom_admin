const Transactions = () => {
  return (
    <div className="bg-[#182237] p-5 rounded-[10px]">
      <h2 className="mb-5 font-[200] text-slate-500">Latest Transactions</h2>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-[10px]">Name</td>
            <td className="p-[10px]">Status</td>
            <td className="p-[10px]">Date</td>
            <td className="p-[10px]">Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-[10px]">
              <div className="flex gap-[10px] items-center">
                <img
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td className="p-[10px]">
              <span className="rounded-full p-[5px] size-[14px] text-white bg-[#f7cb7375]">
                Pending
              </span>
            </td>
            <td className="p-[10px]">14.02.2024</td>
            <td className="p-[10px]">$3.200</td>
          </tr>
          <tr>
            <td className="p-[10px]">
              <div className="flex gap-[10px] items-center">
                <img
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td className="p-[10px]">
              <span className="rounded-full p-[5px] size-[14px] text-white bg-[#afd6ee75]">
                Done
              </span>
            </td>
            <td className="p-[10px]">14.02.2024</td>
            <td className="p-[10px]">$3.200</td>
          </tr>
          <tr>
            <td className="p-[10px]">
              <div className="flex gap-[10px] items-center">
                <img
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td className="p-[10px]">
              <span className="rounded-full p-[5px] size-[14px] text-white bg-[#f7737375]">
                Cancelled
              </span>
            </td>
            <td className="p-[10px]">14.02.2024</td>
            <td className="p-[10px]">$3.200</td>
          </tr>
          <tr>
            <td className="p-[10px]">
              <div className="flex gap-[10px] items-center">
                <img
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td className="p-[10px]">
              <span className="rounded-full p-[5px] size-[14px] text-white bg-[#f7cb7375]">
                Pending
              </span>
            </td>
            <td className="p-[10px]">14.02.2024</td>
            <td className="p-[10px]">$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
