import { useState } from "react";

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full max-w-xs">
      <label className="block text-sm font-medium text-gray-700">Senha</label>
      <div className="relative mt-1">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="password"
          className="w-full pl-3 pr-10 py-2 border border-green-500 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          onClick={() => setShowPassword(!showPassword)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-green-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d={
                showPassword
                  ? "M2.094 7.982a8.456 8.456 0 011.524-2.198l1.87 1.871a3 3 0 104.253 4.253l1.87 1.871c-.65.527-1.364.978-2.133 1.337C8.796 14.84 7.415 15 6 15c-1.606 0-3.125-.268-4.561-.786C.626 12.84 0 11.455 0 10s.626-2.84 1.439-4.014c.15-.202.31-.399.476-.604L.731 4.226A.999.999 0 112.094 7.982zM14.178 14.178l1.44 1.44a9.965 9.965 0 01-4.253 1.881 9.975 9.975 0 01-3.53.5 9.965 9.965 0 01-4.24-1.957A1 1 0 013 14a1 1 0 01.781-1.781l1.225 1.225A7.455 7.455 0 001.55 10c.126-.184.258-.365.396-.545a1.008 1.008 0 01.276-.326l1.087-1.087 1.093 1.093 2.413-2.413a1 1 0 011.415 0l2.415 2.415 1.714-1.715a1 1 0 011.415 0l1.077 1.077a7.985 7.985 0 001.674 1.228 1 1 0 010 1.415L14.178 14.178zM4.93 10a3.97 3.97 0 00-.939 2.472 1.002 1.002 0 01-1.998 0 5.97 5.97 0 01.817-3.157l1.12 1.12zm10.001 1.594l.04.036-1.72 1.72c-.189-.175-.36-.369-.518-.572l1.033-1.033c.21-.183.375-.413.476-.684l.689-.563zm-1.82-3.195a1 1 0 010-1.415l1.078-1.078a1 1 0 011.415 0l.12.12a9.982 9.982 0 00-4.239-1.957A9.975 9.975 0 0010 0a9.965 9.965 0 00-3.53.5 9.965 9.965 0 00-4.25 2.117l.72.72a1 1 0 01-.716-.716l-.72-.72A9.964 9.964 0 014.5 1.12 9.965 9.965 0 0110 0a9.975 9.975 0 013.53.5c.737.15 1.45.41 2.132.874z"
                  : "M10 2C6.4 2 3.35 4.45 2.07 7.93c-.25.7-.25 1.44 0 2.14C3.35 13.55 6.4 16 10 16s6.65-2.45 7.93-5.93c.25-.7.25-1.44 0-2.14C16.65 4.45 13.6 2 10 2zm0 12a5.002 5.002 0 01-4.47-2.924 1 1 0 011.942-.516A3.002 3.002 0 1010 14zm0-4a2 2 0 11-1.732-3h-.076a1 1 0 00.276 1.948A2 2 0 0110 10z"
              }
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
