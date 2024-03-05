import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function AddPersonForm({Persondata}) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const nameParam = queryParams.get('name');
  const initialFormData = {
    Name: '',
    GivenNames: '',
    Surname: '',
    BirthDate: '',
    BirthLocation: '',
    Father: '',
    Mother: '',
    Siblings: '',
    Spouse: '',
    Children: '',
    OtherFamily: '',
    HighSchool: '',
    HighSchoolLocation: '',
    HighSchoolActivities: '',
    HomeTown: '',
    HomeState: '',
    EnteredKnox: '',
    ClassYear: '',
    Major: '',
    Sports: '',
    Honored: '',
    Activities: '',
    GreekOrganization: '',
    EnlistmentDate: '',
    EnlistmentLocation: '',
    EnlistmentNumber: '',
    War: '',
    Service: '',
    SerialNumber: '',
    Rank: '',
    Unit: '',
    ServiceHistory: '',
    Incident: '',
    IncidentDate: '',
    IncidentLocation: '',
    CasualtyData: '',
    YearOfDeath: '',
    DateOfDeath: '',
    AgeAtDeath: '',
    LocationOfDeath: '',
    OriginallyBuried: '',
    Burial: '',
    PlotLocation: '',
    CivilianCenotaph: '',
    MilitaryCenotaph: '',
    Links: '',
    FindAGrave: '',
    Awards: '',
    Citation: '',
    Remarks: '',
    KnoxID: '',
    LastUpdated: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  useEffect(() => {
    if (nameParam) {
      // Editing an existing person
      const matchedPerson = Persondata.find((person) => person.Name === nameParam);

      if (matchedPerson) {
        setFormData(matchedPerson);
      }
    }
  }, [nameParam]);
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onAddPerson(formData);
  //   setFormData(initialFormData); // Reset the form
  // };

  const formFields = Object.keys(initialFormData);

  return (
    <div>
      <h2>Add a New Person</h2>
      <form >
        {formFields.map((fieldName) => (
          <div key={fieldName}>
            <label htmlFor={fieldName}>{fieldName}:</label>
            <input
              type="text"
              name={fieldName}
              value={formData[fieldName]}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddPersonForm;
