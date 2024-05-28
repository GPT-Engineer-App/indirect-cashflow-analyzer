import React, { useState } from "react";
import { Container, VStack, Text, Input, Button, HStack, Table, Thead, Tbody, Tr, Th, Td, IconButton } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [netIncome, setNetIncome] = useState(0);
  const [depreciation, setDepreciation] = useState(0);
  const [amortization, setAmortization] = useState(0);
  const [currentAssets, setCurrentAssets] = useState([]);
  const [currentLiabilities, setCurrentLiabilities] = useState([]);
  const [investingActivities, setInvestingActivities] = useState([]);
  const [financingActivities, setFinancingActivities] = useState([]);

  const handleAddCurrentAsset = () => setCurrentAssets([...currentAssets, { name: "", change: 0 }]);
  const handleAddCurrentLiability = () => setCurrentLiabilities([...currentLiabilities, { name: "", change: 0 }]);
  const handleAddInvestingActivity = () => setInvestingActivities([...investingActivities, { name: "", inflow: 0, outflow: 0 }]);
  const handleAddFinancingActivity = () => setFinancingActivities([...financingActivities, { name: "", inflow: 0, outflow: 0 }]);

  const handleRemoveItem = (setFunction, index) => {
    setFunction((prev) => prev.filter((_, i) => i !== index));
  };

  const handleChange = (setFunction, index, field, value) => {
    setFunction((prev) => prev.map((item, i) => (i === index ? { ...item, [field]: value } : item)));
  };

  const calculateCashFlowFromOperatingActivities = () => {
    let cashFlow = parseFloat(netIncome) + parseFloat(depreciation) + parseFloat(amortization);
    currentAssets.forEach((asset) => {
      cashFlow -= parseFloat(asset.change);
    });
    currentLiabilities.forEach((liability) => {
      cashFlow += parseFloat(liability.change);
    });
    return cashFlow;
  };

  const calculateCashFlowFromInvestingActivities = () => {
    let cashFlow = 0;
    investingActivities.forEach((activity) => {
      cashFlow += parseFloat(activity.inflow) - parseFloat(activity.outflow);
    });
    return cashFlow;
  };

  const calculateCashFlowFromFinancingActivities = () => {
    let cashFlow = 0;
    financingActivities.forEach((activity) => {
      cashFlow += parseFloat(activity.inflow) - parseFloat(activity.outflow);
    });
    return cashFlow;
  };

  const totalCashFlow = () => {
    return calculateCashFlowFromOperatingActivities() + calculateCashFlowFromInvestingActivities() + calculateCashFlowFromFinancingActivities();
  };

  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={6} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          Indirect Cash Flow Statement Calculation
        </Text>

        <VStack spacing={4} width="100%">
          <Text fontSize="xl" fontWeight="bold">
            Operating Activities
          </Text>
          <HStack width="100%">
            <Text width="50%">Net Income:</Text>
            <Input type="number" value={netIncome} onChange={(e) => setNetIncome(e.target.value)} />
          </HStack>
          <HStack width="100%">
            <Text width="50%">Depreciation:</Text>
            <Input type="number" value={depreciation} onChange={(e) => setDepreciation(e.target.value)} />
          </HStack>
          <HStack width="100%">
            <Text width="50%">Amortization:</Text>
            <Input type="number" value={amortization} onChange={(e) => setAmortization(e.target.value)} />
          </HStack>

          <Text fontSize="lg" fontWeight="bold">
            Current Assets
          </Text>
          <Button leftIcon={<FaPlus />} onClick={handleAddCurrentAsset}>
            Add Current Asset
          </Button>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Change</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentAssets.map((asset, index) => (
                <Tr key={index}>
                  <Td>
                    <Input value={asset.name} onChange={(e) => handleChange(setCurrentAssets, index, "name", e.target.value)} />
                  </Td>
                  <Td>
                    <Input type="number" value={asset.change} onChange={(e) => handleChange(setCurrentAssets, index, "change", e.target.value)} />
                  </Td>
                  <Td>
                    <IconButton icon={<FaTrash />} onClick={() => handleRemoveItem(setCurrentAssets, index)} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

          <Text fontSize="lg" fontWeight="bold">
            Current Liabilities
          </Text>
          <Button leftIcon={<FaPlus />} onClick={handleAddCurrentLiability}>
            Add Current Liability
          </Button>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Change</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentLiabilities.map((liability, index) => (
                <Tr key={index}>
                  <Td>
                    <Input value={liability.name} onChange={(e) => handleChange(setCurrentLiabilities, index, "name", e.target.value)} />
                  </Td>
                  <Td>
                    <Input type="number" value={liability.change} onChange={(e) => handleChange(setCurrentLiabilities, index, "change", e.target.value)} />
                  </Td>
                  <Td>
                    <IconButton icon={<FaTrash />} onClick={() => handleRemoveItem(setCurrentLiabilities, index)} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </VStack>

        <VStack spacing={4} width="100%">
          <Text fontSize="xl" fontWeight="bold">
            Investing Activities
          </Text>
          <Button leftIcon={<FaPlus />} onClick={handleAddInvestingActivity}>
            Add Investing Activity
          </Button>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Inflow</Th>
                <Th>Outflow</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {investingActivities.map((activity, index) => (
                <Tr key={index}>
                  <Td>
                    <Input value={activity.name} onChange={(e) => handleChange(setInvestingActivities, index, "name", e.target.value)} />
                  </Td>
                  <Td>
                    <Input type="number" value={activity.inflow} onChange={(e) => handleChange(setInvestingActivities, index, "inflow", e.target.value)} />
                  </Td>
                  <Td>
                    <Input type="number" value={activity.outflow} onChange={(e) => handleChange(setInvestingActivities, index, "outflow", e.target.value)} />
                  </Td>
                  <Td>
                    <IconButton icon={<FaTrash />} onClick={() => handleRemoveItem(setInvestingActivities, index)} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </VStack>

        <VStack spacing={4} width="100%">
          <Text fontSize="xl" fontWeight="bold">
            Financing Activities
          </Text>
          <Button leftIcon={<FaPlus />} onClick={handleAddFinancingActivity}>
            Add Financing Activity
          </Button>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Inflow</Th>
                <Th>Outflow</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {financingActivities.map((activity, index) => (
                <Tr key={index}>
                  <Td>
                    <Input value={activity.name} onChange={(e) => handleChange(setFinancingActivities, index, "name", e.target.value)} />
                  </Td>
                  <Td>
                    <Input type="number" value={activity.inflow} onChange={(e) => handleChange(setFinancingActivities, index, "inflow", e.target.value)} />
                  </Td>
                  <Td>
                    <Input type="number" value={activity.outflow} onChange={(e) => handleChange(setFinancingActivities, index, "outflow", e.target.value)} />
                  </Td>
                  <Td>
                    <IconButton icon={<FaTrash />} onClick={() => handleRemoveItem(setFinancingActivities, index)} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </VStack>

        <VStack spacing={4} width="100%">
          <Text fontSize="xl" fontWeight="bold">
            Total Cash Flow
          </Text>
          <Text>Cash Flow from Operating Activities: {calculateCashFlowFromOperatingActivities()}</Text>
          <Text>Cash Flow from Investing Activities: {calculateCashFlowFromInvestingActivities()}</Text>
          <Text>Cash Flow from Financing Activities: {calculateCashFlowFromFinancingActivities()}</Text>
          <Text fontSize="2xl" fontWeight="bold">
            Total Cash Flow: {totalCashFlow()}
          </Text>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
