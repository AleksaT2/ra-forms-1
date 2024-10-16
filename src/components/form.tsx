import { useState } from "react";
import "./form.css"
export interface CCForm {
        colorHex: string;
        colorRGB: string;
        isValid: boolean;
      }

function ChangeColorForm() {
    const [form, setForm] = useState<CCForm>({
        colorHex: "#34495e",
        colorRGB: "rgb(52, 73, 94)",
        isValid: true,
      });
      

      const hex2rgb = (hex: string): string => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
    
        return `rgb(${r}, ${g}, ${b})`;
      };

      const validHexColor = (color: string): boolean => /^#[a-f0-9]{6}$/i.test(color);

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value: colorHex} = e.target;

        setForm((prevForm) => ({
        ...prevForm,
        colorHex
      }));

      if (colorHex.length >= 7) {
        const isValid = validHexColor(colorHex);
  
        setForm((prevForm) => ({ ...prevForm, isValid }));
  
        if (isValid) {
          const colorRGB = hex2rgb(colorHex);
  
          setForm((prevForm) => ({ ...prevForm, colorRGB }));
  
          document.body.style.backgroundColor = colorRGB;
        } else {
          document.body.style.backgroundColor = 'rgb(231, 76, 60)';
        }
      }
    }
    

      return (
        <>
            <form>
                <input className="hex"
                    value={form.colorHex}
                    onChange={handleChange}
                 />
            
            </form>
            <div className="rgb">{form.isValid ? form.colorRGB : "Ошибка!"}</div>
     </>
      );
}

export default ChangeColorForm;