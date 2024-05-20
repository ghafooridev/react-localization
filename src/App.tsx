import { useTranslation } from "react-i18next";
import Content from "./Login";

function App() {
  const {
    i18n: { changeLanguage, language, dir },
  } = useTranslation();

  const onChangeLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    changeLanguage(value);
  };

  return (
    <div dir={dir()}>
      <div className="header">
        <select onChange={onChangeLocale} value={language}>
          <option value="en">🇺🇸 English</option>
          <option value="fa">🇮🇷 Persian</option>
          <option value="fr">🇫🇷 French</option>
          <option value="ar">🇸🇦 Arabic</option>
          <option value="ch">🇨🇳 Chinese</option>
        </select>
      </div>
      <div className="content">
        <Content />
      </div>
    </div>
  );
}

export default App;
