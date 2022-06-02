import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useSelector, useDispatch } from "react-redux";
import { changeSuccess } from "../redux/alert";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const { showAlert } = useSelector((state) => state.alert);

  const dispatch = useDispatch();

  const displayFail = () => {
    dispatch(changeSuccess("TRUEFAIL"));
  };

  const displaySuccess = () => {
    dispatch(changeSuccess("TRUESUCCESS"));
  };

  const [values, setValues] = useState(initialState);
  // global state and useNavigate

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayFail();
    } else {
      displaySuccess();
    }
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Giriş Yap" : "Kayıt Ol"}</h3>
        {showAlert && <Alert />}
        {/* name input */}
        {!values.isMember && (
          <FormRow
            labelText="İsim"
            type="text"
            name="name"
            value={values.target}
            handleChange={handleChange}
          />
        )}

        {/* email input */}
        <FormRow
          labelText="E-mail"
          type="email"
          name="email"
          value={values.target}
          handleChange={handleChange}
        />
        {/* password input */}
        <FormRow
          labelText="Şifre"
          type="password"
          name="password"
          value={values.target}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          {!values.isMember ? "Kayıt Ol" : "Giriş Yap"}
        </button>
        <p>
          {values.isMember
            ? "Henüz üye değil misiniz?"
            : "Daha önce üye olduysanız"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Kayıt Ol" : "Giriş Yap"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
