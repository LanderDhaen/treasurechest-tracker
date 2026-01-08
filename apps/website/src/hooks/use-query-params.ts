import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function useQueryParams() {
  const params = useSearchParams();
  const searchParams = new URLSearchParams(params.toString());

  const { replace, push } = useRouter();
  const pathName = usePathname();

  const replaceUrl = (newParams: URLSearchParams) => {
    replace(`${pathName}?${newParams.toString()}`);
  };

  const pushUrl = (newParams: URLSearchParams) => {
    push(`${pathName}?${newParams.toString()}`);
  };

  return {
    searchParams,
    replaceUrl,
    pushUrl,
  };
}
