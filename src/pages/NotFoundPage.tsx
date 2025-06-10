import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  console.log(t);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-4 text-center'>
      <h1 className='mb-4 text-4xl font-bold'>{t("notFound.title")}</h1>
      <p className='mb-6 text-lg text-gray-600'>{t("notFound.description")}</p>
      <button onClick={() => void navigate("/")}>{t("notFound.backToHome")}</button>
    </div>
  );
};

export default NotFoundPage;
