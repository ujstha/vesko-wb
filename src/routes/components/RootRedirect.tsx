import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import i18n from "@/locales/i18n.config";

const RootRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    void navigate(`/${i18n.language}`, { replace: true });
  }, [navigate]);

  return null;
};

export { RootRedirect };
