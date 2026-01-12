import sys
import os
import math

try:
    from PIL import Image
except ImportError:
    print("Pillow (PIL) not installed. Please run: pip install Pillow")
    sys.exit(1)

def remove_white_background_soft(input_path, output_path, tolerance=50):
    print(f"Processing (Soft): {input_path}")
    
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        
        datas = img.getdata()
        
        newData = []
        for item in datas:
            r, g, b, a = item
            
            # Calculate distance from white (255, 255, 255)
            dist_r = 255 - r
            dist_g = 255 - g
            dist_b = 255 - b
            
            # Euclidean distance from pure white
            distance = math.sqrt(dist_r**2 + dist_g**2 + dist_b**2)
            
            # If very close to white, make transparent
            if distance < tolerance:
                # Soft blend: 
                # If distance is 0 (pure white), alpha is 0.
                # If distance is close to tolerance, alpha scales up.
                # Formula: alpha = (distance / tolerance) * 255
                # But actually, we usually want to keep the color but reduce alpha.
                
                # Simple logic first:
                # If it's REALLY white (< 10), kill it.
                if distance < 15:
                    newData.append((255, 255, 255, 0))
                else:
                    # Ramping alpha
                    alpha_factor = (distance - 15) / (tolerance - 15)
                    new_alpha = int(alpha_factor * 255)
                    newData.append((r, g, b, new_alpha))
            else:
                newData.append(item)
        
        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Saved to: {output_path}")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    input_file = os.path.join("public", "logomax.jpg")
    output_file = os.path.join("public", "logo-transparent.png")
    
    remove_white_background_soft(input_file, output_file, tolerance=60)
