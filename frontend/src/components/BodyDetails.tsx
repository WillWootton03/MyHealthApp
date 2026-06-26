import { useEffect, useState } from "react";
import axios from "axios";
import FormField from "./FormField";
import { useNavigate } from "react-router";



export default function BodyDetails () {
    const [feet, setFeet] = useState("5");
    const [inches, setInches] = useState('10');
    const [weight, setWeight] = useState("200");
    const [age, setAge] = useState("21");
    const [gender, setGender] = useState('male');
    const [activity_level, setActivity_Level] = useState("1");

    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState<string | null>(null);

    
        const navigate = useNavigate();


    const setBodyDetails = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const token = localStorage.getItem('token');


        const Mheight = Math.floor((Number(feet !== '' ? feet : '5') * 30.48) + (Number(inches !== '' ? inches : '10') * 2.54));

        const KGweight = Math.floor(Number(weight !== '' ? weight : '200') * 0.453592);

        const numActivity_level = Number(activity_level !== '' ? activity_level : '1');

        try {
            await axios.put(
                `${import.meta.env.VITE_API_BASE_ROUTE}/users/body_details`,
                {
                    height: Mheight,
                    weight: KGweight,
                    age: age !== '' ? age : '21',
                    gender: gender !== '' ? gender : 'male',
                    activity_level: numActivity_level,
                },{
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                },
            );

            setLoading(false);
            navigate('/app');
        } catch (err : any) {
        console.error(`Frontend Could Not Process Set Body Details : ${err.response?.data?.message}`);
        setLoading(false);
      }
    }

    return (
        <form onSubmit={setBodyDetails} className="space-y-4">

            {/* Height */}
            <div className="flex gap-2 justify-between">
                <FormField
                    id='feet'
                    label='Feet'
                    type="number"
                    variant="number"
                    value={feet}
                    onChange={setFeet}
                    min='0'
                    max='8'
                    placeholder="5"
                    required
                />
                <FormField
                    id='inches'
                    label='Inches'
                    type="number"
                    variant="number"
                    value={inches}
                    onChange={setInches}
                    min="0"
                    max='12'
                    placeholder="10"
                    required
                />
            </div>

            {/* Weight */}
            <FormField
                id='weight'
                label='Weight (lbs)'
                type="number"
                variant="number"
                value={weight}
                onChange={setWeight}
                min="0"
                max="1000"
                placeholder="200"
                required
            />

            {/* Age */}
            <FormField
                id='age'
                label='Age'
                type="number"
                variant="number"
                value={age}
                onChange={setAge}
                min="0"
                max="110"
                placeholder="21"
                required
            />

            {/* Gender */}
            <FormField
                id='gender'
                label='gender'
                type="text"
                variant="select"
                options={[
                    { label: "Male", value: "male"},
                    { label: "Female", value: "female" },
                ]}
                value={gender}
                onChange={setGender}
                placeholder="male"
                required
            />

            {/* Activity Level */}
                <FormField
                    id='activity_level'
                    label='Activity Level'
                    type="text"
                    variant="select"
                    options={[
                        { label: "Sedentary (No Excersize. Little movement)", value: "1"},
                        { label: "Light Active (Excersize 1-3 days/week)", value: "2"},
                        { label: "Moderately Active (Excersize 3-5 days/week)", value: "3"},
                        { label: "Very Active (Excersize 6-7 days/week)", value: "4"},
                        { label: "Extremely Active (Very Heavy Excersize)", value: "5"},
                    ]}
                    value={activity_level}
                    onChange={setActivity_Level}
                    placeholder="Sedentary (No Excersize. Little movement)"
                    required
                />

            {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-1 py-3.5 bg-color-primary text-white text-sm font-medium rounded-lg hover-bg-color-primary active:scale-[0.99] 
                  transition-all duration-150 disabled:opacity-60 flex items-center justify-center gap-2 hover:cursor-pointer"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth='3' />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Submiting Details...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
        </form>
    );
}
