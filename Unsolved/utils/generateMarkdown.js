function generateMarkdown(data) {
  return `

 # **${data.title}** 

![Licenses](https://img.shields.io/badge/license-${data.license}-blue.svg)
 
## **Description** 
 
${data.description}

## **Table of Contents**
  * <font color=blue>Installation</font>
  * <font color=blue>Usage</font>
  * <font color=blue>License</font>
  * <font color=blue>Contributing</font>
  * <font color=blue>Tests</font>
  * <font color=blue>Questions</font>

# **Installation** 
### To install necessary dependencies, run the following command:
 <font color=yellow>${data.install}</font>

# **Usage**

# **License**
### This project is licensed under the ${data.license} license.

# **Contributing** 
 ${data.contributors}

# **Tests**  
### To run tests, run the following command:
<font color=yellow>${data.tests}</font>



# **Questions** 
${data.questions}

# **Username**  
${data.username}

![Github Username avatar](${data.avatar_url})
`;
}

module.exports = generateMarkdown;
