<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>TS - Auth</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>false</rerunImmediately>
   <testSuiteGuid>32ab1a92-882d-491c-ab9f-caaa1f18eddd</testSuiteGuid>
   <testCaseLink>
      <guid>9d09c634-ccfd-4568-b1ec-19e2eab74e53</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/TestLogin/Test Login Invalid</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>daf8fd5c-e608-4484-8cef-e5b28892c0fb</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>33a5a673-4bd5-47fd-bd87-41c064ce00ca</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/TestLogin/Test Login Valid</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>5c739194-c89f-4981-952b-f93db531c196</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Test Data - Login/Login Credential</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>5c739194-c89f-4981-952b-f93db531c196</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>username</value>
         <variableId>80809122-da52-4234-b31c-cc1963a99bc9</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>5c739194-c89f-4981-952b-f93db531c196</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>b6bdf891-b8b8-4cf5-8ff4-2c41bd00644a</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
