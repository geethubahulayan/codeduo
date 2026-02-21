![WhatsApp Image 2026-02-21 at 10 21 58 AM](https://github.com/user-attachments/assets/9eafaf86-969d-4dc3-a599-f56a1ea538cf)<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# [EcoMetric] 🎯

## Basic Details

### Team Name: [codeduo]

### Team Members
- Member 1: Geethu S Bahulayan - College Of Engineering Attingal
- Member 2: Krishna Ajayan- College Of Engineering Attingal

### Hosted Project Link
https://geethubahulayan.github.io/codeduo/

### Project Description
EcoMetric is a beginner-friendly web application that encourages eco-friendly practices while providing a platform for buying and selling sustainable products. The project is built entirely with HTML, CSS, and JavaScript using localStorage for data storage, making it simple, lightweight, and easy to run locally without a server.

### The Problem statement
Finding and buying eco-friendly products is difficult, and small producers don’t have an easy platform to sell their sustainable products.
### The Solution
EcoMetric is a simple web platform where users can buy and sell eco-friendly products. Sellers can upload product details and images, while buyers can browse and place orders. All data is stored in the browser, making it easy to use without a server and helping connect eco-conscious consumers with sustainable products

---

## Technical Details

### Technologies/Components Used

**For Software:**
- Languages used: html,css,javascript
- Tools used:  VS Code, Git


---

## Features

List the key features of your project:
 User Authentication: Sign up and login system to create personal accounts.
 Sell Products: Upload and manage eco-friendly products with images and details.
 Buy Products: Browse products uploaded by others and place orders.
 Order Tracking: View orders placed by the user in a dedicated section.

---

## Implementation

### For Software:

#### Installation
```bash
[Installation commands - e.g., npm install, pip install -r requirements.txt]
```

#### Run
```bash
[Run commands - e.g., npm start, python app.py]
```



---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

<img width="1886" height="941" alt="Screenshot 2026-02-21 095157" src="https://github.com/user-attachments/assets/0bda2b48-30f0-4f93-8e9b-45d6011ef585" />  frontend
<img width="1893" height="1063" alt="Screenshot 2026-02-21 095122" src="https://github.com/user-attachments/assets/7a9e7168-edde-42cb-8bcc-2ebbf569eae1" /> login page

<img width="1561" height="908" alt="Screenshot 2026-02-21 095220" src="https://github.com/user-attachments/assets/4e421703-97b3-4a2a-a629-1a50dd2a4774" /> selling product page


#### Diagrams

+-----------------+         +-------------------+         +----------------+
|                 |         |                   |         |                |
|   User Browser  | <-----> |     Frontend      | <-----> |  storage.js    |
|  (HTML/CSS/JS)  |         | (HTML/CSS Pages)  |         |  (Logic +      |
|                 |         |                   |         |  localStorage) |
+-----------------+         +-------------------+         +----------------+
         |                           |                          |
         |                           |                          |
         v                           v                          v
  Signup / Login               Sell Products               Data Storage
  - Email / Password           - Product details           - Users
                               - Image upload              - Products
                               - Delete products           - Orders
                                                          |
                                                          v
                                                    Buy Products
                                                    - Browse products
                                                    - Place order
                                                    - View My Orders



#### Build Photos


<img width="1069" height="611" alt="Screenshot 2026-02-21 102320" src="https://github.com/user-attachments/assets/deec7af6-019a-480c-8fd5-37aaa8ef22a4" />


<img width="1552" height="950" alt="Screenshot 2026-02-21 101919" src="https://github.com/user-attachments/assets/7b16b596-5d48-40b2-b0cd-6dc8bc395231" />


<img width="1919" height="983" alt="Screenshot 2026-02-21 101341" src="https://github.com/user-attachments/assets/4bb60591-2391-4dd6-bba3-0b638206a2cb" /> 

---


---

### For Mobile Apps:

#### App Flow Diagram

![App Flow](docs/app-flow.png)
*Explain the user flow through your application*


./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---

![Step 1](images/assembly-step1.jpg)
*Caption: All components laid out*

**Step 2: Build the Power Supply**
1. Connect the power rails on the breadboard
2. Connect Arduino 5V to breadboard positive rail
3. Connect Arduino GND to breadboard negative rail
![Step 2](images/assembly-step2.jpg)
*Caption: Power connections completed*

**Step 3: Add Components**
1. Place LEDs on breadboard
2. Connect resistors in series with LEDs
3. Connect LED cathodes to GND
4. Connect LED anodes to Arduino digital pins (2-6)
![Step 3](images/assembly-step3.jpg)
*Caption: LED circuit assembled*

**Step 4: [Continue for all steps...]**

**Final Assembly:**
![Final Build](images/final-build.jpg)
*Caption: Completed project ready for testing*

---

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
python script.py [options] [arguments]
```

**Available Commands:**
- `command1 [args]` - Description of what command1 does
- `command2 [args]` - Description of what command2 does
- `command3 [args]` - Description of what command3 does

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**

```bash
# Example 1: Basic usage
python script.py input.txt

# Example 2: With verbose output
python script.py -v input.txt

# Example 3: Specify output file
python script.py -o output.txt input.txt

# Example 4: Using configuration
python script.py -c config.json --verbose input.txt
```

#### Demo Output

**Example 1: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

**Example 2: Advanced Usage**

**Input:**
```json
{
  "name": "test",
  "value": 123
}
```

**Command:**
```bash
python script.py -v --format json data.json
```

**Output:**
```
[VERBOSE] Loading configuration...
[VERBOSE] Parsing JSON input...
[VERBOSE] Processing data...
{
  "status": "success",
  "processed": true,
  "result": {
    "name": "test",
    "value": 123,
    "timestamp": "2024-02-07T10:30:00"
  }
}
[VERBOSE] Operation completed in 0.23s
```

---

## Project Demo

### Video
[[Add your demo video link here - YouTube, Google Drive, etc.]](https://drive.google.com/file/d/1UevrUTqYG6O-vPU7MbndG4yFL-TewA9_/view?usp=sharing)

*Explain what the video demonstrates - key features, user flow, technical highlights*

### Additional Demos
[Add any extra demo materials/links - Live site, APK download, online demo, etc.]

---

## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

**Tool Used:** [e.g., GitHub Copilot, v0.dev, Cursor, ChatGPT, Claude]

**Purpose:** [What you used it for]
- Example: "Generated boilerplate React components"
- Example: "Debugging assistance for async functions"
- Example: "Code review and optimization suggestions"

**Key Prompts Used:**
- "Create a REST API endpoint for user authentication"
- "Debug this async function that's causing race conditions"
- "Optimize this database query for better performance"

**Percentage of AI-generated code:** [Approximately X%]

**Human Contributions:**
- Architecture design and planning
- Custom business logic implementation
- Integration and testing
- UI/UX design decisions

*Note: Proper documentation of AI usage demonstrates transparency and earns bonus points in evaluation!*

---

## Team Contributions

- [Name 1]: [Specific contributions - e.g., Frontend development, API integration, etc.]
- [Name 2]: [Specific contributions - e.g., Backend development, Database design, etc.]
- [Name 3]: [Specific contributions - e.g., UI/UX design, Testing, Documentation, etc.]

---

## License

This project is licensed under the [LICENSE_NAME] License - see the [LICENSE](LICENSE) file for details.

**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---

Made with ❤️ at TinkerHub
