Video Demos of GreenBook: (Video interrupted between recordings)
https://www.loom.com/share/4d33628debee4f51af6b8ec121c4dfba

https://www.loom.com/share/13fd7e97bb874c9f875c2d04dfa1b405

https://docs.google.com/document/d/14iEyNzuP590F6zTxIan07VD_l-9FUrX7CEnE-A7CFAs/edit


The GreenBook

Purpose

The Green Book was a travel guide created by Victor Hugo Green, an African American postal worker, in 1936 during the era of segregation in the United States. The guide listed safe places for Black travelers to stay, dine and shop on the road, as many establishments refused to serve Black customers or subjected them to discrimination and violence.

In 1936, during segregation in the United States, Victor Hugo Green, an African American postal worker, created a travel guide known as The Green Book. The guide aimed to assist Black travelers in finding safe places to stay, dine, and shop while on the road, as many establishments refused to serve Black customers or subjected them to discrimination and violence.

Over time, the guide expanded its coverage to encompass the entire United States, becoming a crucial resource for Black travelers during the Civil Rights era. The Green Book also symbolized hope and resilience for the Black community, showcasing the power of collective action in combating discrimination.

Despite the publication's discontinuation in 1966, following the passing of the Civil Rights Act, which prohibited discrimination in public accommodations, the legacy of The Green Book endures. It continues to serve as a reminder of the struggles and victories of the Civil Rights movement and the ongoing efforts toward achieving racial justice in America.

Installation

Open your terminal or command prompt on your computer.
Navigate to the directory where you want to store the repository using the "cd" command.
Use the "git clone" command followed by the URL of the Github repository to clone the repository. For example:

git clone https://github.com/username/repository.git

Replace "username" with the username of the repository owner and "repository" with the name of the repository.

Press enter and wait for the repository to download to your local machine.


If you have already cloned the repository to your computer and want to update it with any changes made by others, you can use the "git pull" command. Navigate to the directory of the cloned repository using the "cd" command and then run the following command:
	git pull

This command will fetch any changes made in the repository and merge them with your local copy.


Configuration

Download JSON DB and run it locally by running command:

	json-server --watch database.json --port 8088

Potential Error Messages with DB conflict
When you are trying to run an npm start command on a cloned react project sometimes
you probably see this type of error in your terminal.
sh: react-scripts: command not found
npm ERR! code ELIFECYCLE
npm ERR! syscall spawn
npm ERR! file sh
npm ERR! errno ENOENT
npm ERR! react-track@0.1.0 start: `react-scripts start`
npm ERR! spawn ENOENT
npm ERR!
npm ERR! Failed at the react-track@0.1.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

This error occurs due to a node_modules folder doesn’t present in your project or package-lock.json file is corrupted.
To fix this error, follow the below steps.
First, delete the node_modules folder in your project (if you have one) using the below command.
rm -rf node_modules
Delete the package-lock.json file.
rm -rf package-lock.json
Install the project dependencies by running the following command.
npm install
Now, try to start the development server again using the npm start command it will work successfully without any errors.
Compiled successfully!
You can now view react-track in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.3:3000

Note that the development build is not optimized.
To create a production build, use npm run build.


Usage


Landing Page


Registration Page

Login Screen

Business Directory


Business Directory

	
Business Profile with “Like” functionality


Creator Content Information









Video Walk-through

https://www.loom.com/share/d4ec19803b114d21b497ddf0a1a76307



Dependencies:

npm add react-big-calendar react-datepicker date-fns

npm install react-modal
