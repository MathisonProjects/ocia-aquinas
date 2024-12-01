import Head from "next/head";
import { Container, Typography, Button, Grid, TextField, TextareaAutosize, Checkbox, Radio } from "@mui/material";
import DefaultTemplate from "@/components/DefaultTemplate";
import { useState } from "react";

const langData: any = {
    en: {
        switchLanguage: "Cambiar a Español",
        title: "Parish Registration",
        description: "Welcome to the Parish Registration page. Please fill out the form below to register.",
        fields: {
            lastName: "Last Name",
            firstName: "First Name",
            middleName: "Middle Name",
            streetAddress: "Street Address",
            aptSuite: "Apt/Suite",
            city: "City",
            state: "State",
            zipCode: "Zip Code",
            phoneNumber: "Phone Number",
            cellPhoneNumber: "Cell Phone Number",
            sex: "Sex",
            dateOfBirth: "Date of Birth",
            email: "Email",
            supportHow: "How are you willing to commit to support your Parish?",
            sacraments: {
              baptism: "Baptism",
              firstCommunion: "First Communion",
              confirmation: "Confirmation",
              marriageInChurch: "Marriage in the Church",
            },
            spouse: {
              title: "Spouse",
              add: "Add Spouse",
              remove: "Remove Spouse",
              lastName: "Last Name",
              firstName: "First Name",
              middleName: "Middle Name",
              dateOfBirth: "Date of Birth",
              sex: "Sex",
              sacraments: {
                baptism: "Baptism",
                firstCommunion: "First Communion",
                confirmation: "Confirmation",
                marriageInChurch: "Marriage in the Church",
              }
            },
            household: {
              add: "Add Household Member",
              remove: "Remove Household Member",
              title: "Household Member",
              lastName: "Last Name",
              firstName: "First Name",
              middleName: "Middle Name",
              relationship: "Relationship to You",
              dateOfBirth: "Date of Birth",
              sex: "Sex",
              sacraments: {
                baptism: "Baptism",
                firstCommunion: "First Communion",
                confirmation: "Confirmation",
                marriageInChurch: "Marriage in the Church",
              }
            }
        }
    },
    es: {
        switchLanguage: "Switch to English",
        title: "Registro Parroquial",
        description: "Bienvenido a la página de Registro Parroquial. Por favor complete el formulario a continuación para registrarse.",
        fields: {
          lastName: "Apellido",
          firstName: "Nombre",
          middleName: "Segundo Nombre",
          streetAddress: "Dirección",
          aptSuite: "Apt/Suite",
          city: "Ciudad",
          state: "Estado",
          zipCode: "Código Postal",
          phoneNumber: "Teléfono",
          cellPhoneNumber: "Teléfono Celular",
          sex: "Sexo",
          dateOfBirth: "Fecha de Nacimiento",
          email: "Email",
          supportHow: "Cómo estás dispuesto a comprometerte a apoyar a tu Parroquia?",
          sacraments: {
            baptism: "Bautismo",
            firstCommunion: "Primera Comunión",
            confirmation: "Confirmación",
            marriageInChurch: "Matrimonio en la Iglesia",
          },
          spouse: {
            title: "Cónyuge",
            add: "Agregar Cónyuge",
            remove: "Eliminar Cónyuge",
            lastName: "Apellido",
            firstName: "Nombre",
            middleName: "Segundo Nombre",
            dateOfBirth: "Fecha de Nacimiento",
            sex: "Sexo",
            sacraments: {
              baptism: "Bautismo",
              firstCommunion: "Primera Comunión",
              confirmation: "Confirmación",
              marriageInChurch: "Matrimonio en la Iglesia",
            }
          },
          household: {
            add: "Agregar Miembro de la Casa",
            remove: "Eliminar Miembro de la Casa",
            title: "Miembro de la Casa",
            lastName: "Apellido",
            firstName: "Nombre",
            middleName: "Segundo Nombre",
            relationship: "Relación con Usted",
            dateOfBirth: "Fecha de Nacimiento",
            sex: "Sexo",
            sacraments: {
              baptism: "Bautismo",
              firstCommunion: "Primera Comunión",
              confirmation: "Confirmación",
              marriageInChurch: "Matrimonio en la Iglesia",
            }
          }
        }
    }
}

export default function ParishRegistration() {
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const [formData, setFormData] = useState<any>({
    spouse: {},
    household: []
  });
  const [showSpouse, setShowSpouse] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
  };

  const toggleSpouse = () => {
    setShowSpouse((prevShowSpouse) => !prevShowSpouse);
  };

  const addHouseholdMember = () => {
    setFormData({ ...formData, household: [...formData.household, {}] });
  };

  const removeHouseholdMember = (index: number) => {
    const updatedHousehold = formData.household.filter((_: any, i: number) => i !== index);
    setFormData({ ...formData, household: updatedHousehold });
  };

  const submitForm = () => {
    console.log(formData);
  };

  return (
    <>
      <Head>
        <title>Parish Registration - St Thomas Aquinas Cathedral</title>
        <meta name="description" content="Parish Registration for St Thomas Aquinas Cathedral" />
      </Head>
      <DefaultTemplate>
        <Container>
          <Button variant="contained" onClick={toggleLanguage} sx={{ marginBottom: 2 }}>
            {langData[language].switchLanguage}
          </Button>
          <Typography variant="h4" gutterBottom>
            {langData[language].title}
          </Typography>
          <Typography variant="body1" paragraph>
            {langData[language].description}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField fullWidth label={langData[language].fields.lastName} variant="outlined" style={{ backgroundColor: 'white', color: 'black' }} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth label={langData[language].fields.firstName} variant="outlined" style={{ backgroundColor: 'white', color: 'black' }} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth label={langData[language].fields.middleName} variant="outlined" style={{ backgroundColor: 'white', color: 'black' }} onChange={(e) => setFormData({ ...formData, middleName: e.target.value })} />
            </Grid>
          </Grid>
          <Grid container spacing={2} direction="row" sx={{ marginTop: 2 }}>
            <Grid item xs={8}>
              <TextField fullWidth label={langData[language].fields.streetAddress} variant="outlined" style={{ backgroundColor: 'white', color: 'black' }} onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })} />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth label={langData[language].fields.aptSuite} variant="outlined" style={{ backgroundColor: 'white', color: 'black' }} onChange={(e) => setFormData({ ...formData, aptSuite: e.target.value })} />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth label={langData[language].fields.city} variant="outlined" style={{ backgroundColor: 'white', color: 'black' }} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth label={langData[language].fields.state} variant="outlined" style={{ backgroundColor: 'white', color: 'black' }} onChange={(e) => setFormData({ ...formData, state: e.target.value })} />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth label={langData[language].fields.zipCode} variant="outlined" style={{ backgroundColor: 'white', color: 'black' }} onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })} />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label={langData[language].fields.phoneNumber} variant="outlined" style={{ backgroundColor: 'white', color: 'black' }} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label={langData[language].fields.cellPhoneNumber} variant="outlined" style={{ backgroundColor: 'white', color: 'black' }} onChange={(e) => setFormData({ ...formData, cellPhoneNumber: e.target.value })} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label={langData[language].fields.email} variant="outlined" style={{ backgroundColor: 'white', color: 'black' }} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </Grid>
          </Grid>
          <Grid container spacing={2} direction="row" sx={{ marginTop: 2 }}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label={langData[language].fields.dateOfBirth}
                variant="outlined"
                style={{ backgroundColor: 'white', color: 'black' }}
                onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                select
                fullWidth
                label={langData[language].fields.sex}
                variant="outlined"
                style={{ backgroundColor: 'white', color: 'black' }}
                onChange={(e) => setFormData({ ...formData, sex: e.target.value })}
                SelectProps={{
                  native: true,
                }}
              >
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </TextField>
            </Grid>
          </Grid>

          <Grid container spacing={2} direction="row" sx={{ marginTop: 2 }}>
            <Grid item xs={4}>
              <Typography variant="h6" gutterBottom>
                {langData[language].fields.sacraments.baptism}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Checkbox
                checked={formData.sacraments?.baptism || false}
                onChange={(e) => setFormData({ ...formData, sacraments: { ...formData.sacraments, baptism: e.target.checked } })}
                inputProps={{ 'aria-label': 'Baptism' }}
                sx={{ backgroundColor: 'white', color: 'black' }}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" gutterBottom>
                {langData[language].fields.sacraments.firstCommunion}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Checkbox
                checked={formData.sacraments?.firstCommunion || false}
                onChange={(e) => setFormData({ ...formData, sacraments: { ...formData.sacraments, firstCommunion: e.target.checked } })}
                inputProps={{ 'aria-label': 'First Communion' }}
                sx={{ backgroundColor: 'white', color: 'black' }}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" gutterBottom>
                {langData[language].fields.sacraments.confirmation}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Checkbox
                checked={formData.sacraments?.confirmation || false}
                onChange={(e) => setFormData({ ...formData, sacraments: { ...formData.sacraments, confirmation: e.target.checked } })}
                inputProps={{ 'aria-label': 'Confirmation' }}
                sx={{ backgroundColor: 'white', color: 'black' }}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6" gutterBottom>
                {langData[language].fields.sacraments.marriageInChurch}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Checkbox
                checked={formData.sacraments?.marriageInChurch || false}
                onChange={(e) => setFormData({ ...formData, sacraments: { ...formData.sacraments, marriageInChurch: e.target.checked } })}
                inputProps={{ 'aria-label': 'Marriage in the Church' }}
                sx={{ backgroundColor: 'white', color: 'black' }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} direction="row" sx={{ marginTop: 2 }}>
            <Grid item xs={12}>
              <h3>{langData[language].fields.supportHow}</h3>
              <TextareaAutosize style={{ backgroundColor: 'white', color: 'black', width: '100%', height: '100px' }} onChange={(e) => setFormData({ ...formData, supportHow: e.target.value })} />
            </Grid>
          </Grid>
          <Button variant="contained" onClick={toggleSpouse} sx={{ marginTop: 2 }}>{ showSpouse ? langData[language].fields.spouse.remove : langData[language].fields.spouse.add}</Button>
          { showSpouse && (
            <Grid container spacing={2} direction="row" sx={{ marginTop: 2 }}>
              <Grid item xs={12}>
                <h4>{langData[language].fields.spouse.title}</h4>
              </Grid>
              <Grid item xs={4}>
                <TextField fullWidth label={langData[language].fields.spouse.lastName} variant="outlined" style={{ backgroundColor: 'white', color: 'black' }} onChange={(e) => setFormData({ ...formData, spouse: { ...formData.spouse, lastName: e.target.value } })} />
              </Grid>
              <Grid item xs={4}>
                <TextField fullWidth label={langData[language].fields.spouse.firstName} variant="outlined" style={{ backgroundColor: 'white', color: 'black' }} onChange={(e) => setFormData({ ...formData, spouse: { ...formData.spouse, firstName: e.target.value } })} />
              </Grid>
              <Grid item xs={4}>
                <TextField fullWidth label={langData[language].fields.spouse.middleName} variant="outlined" style={{ backgroundColor: 'white', color: 'black' }} onChange={(e) => setFormData({ ...formData, spouse: { ...formData.spouse, middleName: e.target.value } })} />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label={langData[language].fields.spouse.dateOfBirth}
                  variant="outlined"
                  style={{ backgroundColor: 'white', color: 'black' }}
                  onChange={(e) => setFormData({ ...formData, spouse: { ...formData.spouse, dateOfBirth: e.target.value } })}
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h6" gutterBottom>
                  {langData[language].fields.spouse.sacraments.baptism}
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Checkbox
                  checked={formData.spouse?.sacraments?.baptism || false}
                  onChange={(e) => setFormData({ ...formData, spouse: { ...formData.spouse, sacraments: { ...formData.spouse.sacraments, baptism: e.target.checked } } })}
                  inputProps={{ 'aria-label': 'Baptism' }}
                  sx={{ backgroundColor: 'white', color: 'black' }}
                />
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h6" gutterBottom>
                  {langData[language].fields.spouse.sacraments.firstCommunion}
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Checkbox
                  checked={formData.spouse?.sacraments?.firstCommunion || false}
                  onChange={(e) => setFormData({ ...formData, spouse: { ...formData.spouse, sacraments: { ...formData.spouse.sacraments, firstCommunion: e.target.checked } } })}
                  inputProps={{ 'aria-label': 'First Communion' }}
                  sx={{ backgroundColor: 'white', color: 'black' }}
                />
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h6" gutterBottom>
                  {langData[language].fields.spouse.sacraments.confirmation}
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Checkbox
                  checked={formData.spouse?.sacraments?.confirmation || false}
                  onChange={(e) => setFormData({ ...formData, spouse: { ...formData.spouse, sacraments: { ...formData.spouse.sacraments, confirmation: e.target.checked } } })}
                  inputProps={{ 'aria-label': 'Confirmation' }}
                  sx={{ backgroundColor: 'white', color: 'black' }}
                />
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h6" gutterBottom>
                  {langData[language].fields.spouse.sacraments.marriageInChurch}
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <Checkbox
                  checked={formData.spouse?.sacraments?.marriageInChurch || false}
                  onChange={(e) => setFormData({ ...formData, spouse: { ...formData.spouse, sacraments: { ...formData.spouse.sacraments, marriageInChurch: e.target.checked } } })}
                  inputProps={{ 'aria-label': 'Marriage in the Church' }}
                  sx={{ backgroundColor: 'white', color: 'black' }}
                />
              </Grid>
            </Grid>
          )}
          <Grid container spacing={2} direction="row" sx={{ marginTop: 2, paddingBottom: '32px' }}>
            <Grid item xs={12}>
              <Button variant="contained" sx={{ marginTop: 2 }} onClick={addHouseholdMember}>{langData[language].fields.household.add}</Button>
            </Grid>
          {formData.household?.map((member: any, index: number) => (
              <>
              <Grid item xs={6}>
                <h4>{langData[language].fields.household.title}</h4>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" color="error" onClick={() => removeHouseholdMember(index)}>{langData[language].fields.household.remove}</Button>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label={langData[language].fields.household.firstName}
                  variant="outlined"
                  style={{ backgroundColor: 'white', color: 'black' }}
                  onChange={(e) => {
                    const updatedHousehold = [...formData.household];
                    updatedHousehold[index].firstName = e.target.value;
                    setFormData({ ...formData, household: updatedHousehold });
                  }}
                  value={member.firstName || ''}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label={langData[language].fields.household.middleName}
                  variant="outlined"
                  style={{ backgroundColor: 'white', color: 'black' }}
                  onChange={(e) => {
                    const updatedHousehold = [...formData.household];
                    updatedHousehold[index].middleName = e.target.value;
                    setFormData({ ...formData, household: updatedHousehold });
                  }}
                  value={member.middleName || ''}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label={langData[language].fields.household.lastName}
                  variant="outlined"
                  style={{ backgroundColor: 'white', color: 'black' }}
                  onChange={(e) => {
                    const updatedHousehold = [...formData.household];
                    updatedHousehold[index].lastName = e.target.value;
                    setFormData({ ...formData, household: updatedHousehold });
                  }}
                  value={member.lastName || ''}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label={langData[language].fields.household.relationship}
                  variant="outlined"
                  style={{ backgroundColor: 'white', color: 'black' }}
                  onChange={(e) => {
                    const updatedHousehold = [...formData.household];
                    updatedHousehold[index].relationship = e.target.value;
                    setFormData({ ...formData, household: updatedHousehold });
                  }}
                  value={member.relationship || ''}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  label={langData[language].fields.household.dateOfBirth}
                  variant="outlined"
                  style={{ backgroundColor: 'white', color: 'black' }}
                  onChange={(e) => {
                    const updatedHousehold = [...formData.household];
                    updatedHousehold[index].dateOfBirth = e.target.value;
                    setFormData({ ...formData, household: updatedHousehold });
                  }}
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={member.dateOfBirth || ''}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  select
                  fullWidth
                  label={langData[language].fields.household.sex}
                  variant="outlined"
                  style={{ backgroundColor: 'white', color: 'black' }}
                  onChange={(e) => {
                    const updatedHousehold = [...formData.household];
                    updatedHousehold[index].sex = e.target.value;
                    setFormData({ ...formData, household: updatedHousehold });
                  }}
                  value={member.sex || ''}
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value="" />
                  <option value="male">{language === 'en' ? 'Male' : 'Masculino'}</option>
                  <option value="female">{language === 'en' ? 'Female' : 'Femenino'}</option>
                </TextField>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" gutterBottom>
                  {langData[language].fields.household.sacraments.baptism}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  checked={member.sacraments?.baptism || false}
                  onChange={(e) => {
                    const updatedHousehold = [...formData.household];
                    updatedHousehold[index].sacraments = {
                      ...updatedHousehold[index].sacraments,
                      baptism: e.target.checked,
                    };
                    setFormData({ ...formData, household: updatedHousehold });
                  }}
                  inputProps={{ 'aria-label': 'Baptism' }}
                  sx={{ backgroundColor: 'white', color: 'black' }}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" gutterBottom>
                  {langData[language].fields.household.sacraments.firstCommunion}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  checked={member.sacraments?.firstCommunion || false}
                  onChange={(e) => {
                    const updatedHousehold = [...formData.household];
                    updatedHousehold[index].sacraments = {
                      ...updatedHousehold[index].sacraments,
                      firstCommunion: e.target.checked,
                    };
                    setFormData({ ...formData, household: updatedHousehold });
                  }}
                  inputProps={{ 'aria-label': 'First Communion' }}
                  sx={{ backgroundColor: 'white', color: 'black' }}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" gutterBottom>
                  {langData[language].fields.household.sacraments.confirmation}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  checked={member.sacraments?.confirmation || false}
                  onChange={(e) => {
                    const updatedHousehold = [...formData.household];
                    updatedHousehold[index].sacraments = {
                      ...updatedHousehold[index].sacraments,
                      confirmation: e.target.checked,
                    };
                    setFormData({ ...formData, household: updatedHousehold });
                  }}
                  inputProps={{ 'aria-label': 'Confirmation' }}
                  sx={{ backgroundColor: 'white', color: 'black' }}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" gutterBottom>
                  {langData[language].fields.household.sacraments.marriageInChurch}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Checkbox
                  checked={member.sacraments?.marriageInChurch || false}
                  onChange={(e) => 
                  {
                    const updatedHousehold = [...formData.household];
                    updatedHousehold[index].sacraments = {
                      ...updatedHousehold[index].sacraments,
                      marriageInChurch: e.target.checked,
                    };
                    setFormData({ ...formData, household: updatedHousehold });
                  }}
                  inputProps={{ 'aria-label': 'Marriage in the Church' }}
                  sx={{ backgroundColor: 'white', color: 'black' }}
                />
              </Grid>
              </>
          ))}
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'right', paddingBottom: '48px' }}>
            <Button variant="contained" onClick={submitForm} sx={{ marginTop: 2 }}>Submit Form</Button>
          </Grid>
        </Container>
      </DefaultTemplate>
    </>
  );
}
