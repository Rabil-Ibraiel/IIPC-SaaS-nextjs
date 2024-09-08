import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const InvoiceDocument = ({ item }) => {
  console.log(item);
  let styles;
  if (item.theme === "classic") {
    styles = StyleSheet.create({
      page: {
        padding: 40,
        fontSize: 12,
        color: "#000", // Black text color
        backgroundColor: "#f9f9f9", // Light background color
      },
      header: {
        borderBottom: "1px solid #ccc", // Light border
        paddingBottom: 10,
        marginBottom: 20,
      },
      headerText: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#000", // Black text color
        textAlign: "center",
      },
      section: {
        marginBottom: 20,
      },
      infoContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 40,
        marginBottom: 40,
      },
      invoiceInfo: {
        marginBottom: 10,
      },
      invoiceText: {
        marginBottom: 4,
      },
      table: {
        display: "table",
        width: "auto",
      },
      tableRow: {
        flexDirection: "row",
        borderBottom: "1px solid #ccc", // Light border
        paddingVertical: 8,
      },
      tableCellHeader: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#000", // Black text color
      },
      tableCell: {
        fontSize: 12,
        padding: 5,
      },
      footer: {
        marginTop: "auto",
        borderTop: "1px solid #ccc", // Light border
        paddingTop: 10,
        textAlign: "center",
        fontSize: 10,
        color: "#666", // Medium gray text color
      },
    });
  } else if (item.theme === "vintage") {
    styles = StyleSheet.create({
      page: {
        padding: 40,
        fontSize: 12,
        color: "#4A4A4A", // Dark gray text color
        backgroundColor: "#fef3e3", // Light beige background
      },
      header: {
        borderBottom: "2px solid #6d4c41", // Brown border
        paddingVertical: 20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginBottom: 30,
        backgroundColor: "#f8e1d4", // Light peach background for header
      },
      headerText: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#6d4c41", // Brown text color
        textAlign: "center",
      },
      section: {
        marginBottom: 30,
      },
      infoContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 30,
      },
      invoiceInfo: {
        marginBottom: 8,
      },
      invoiceText: {
        marginBottom: 4,
      },
      table: {
        display: "table",
        width: "100%",
        borderCollapse: "collapse", // Collapse table borders
      },
      tableRow: {
        flexDirection: "row",
        paddingVertical: 12,
      },
      tableCellHeader: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#6d4c41", // Brown text color
        padding: 12,
        borderBottom: "2px solid #6d4c41", // Brown border for header cells
      },
      tableCell: {
        fontSize: 12,
        padding: 12,
        color: "#4A4A4A", // Dark gray text color
        borderBottom: "1px solid #d1b79a", // Beige border
      },
      footer: {
        marginTop: "auto",
        borderTop: "2px solid #6d4c41", // Brown border
        paddingTop: 15,
        textAlign: "center",
        fontSize: 10,
        color: "#6d4c41", // Brown text color
      },
    });
  } else if (item.theme === "modren") {
    styles = StyleSheet.create({
      page: {
        padding: 40,
        fontSize: 12,
        color: "#fff", // White text color
        backgroundColor: "#2b2b2b", // Dark background
      },
      header: {
        borderBottom: "3px solid #00bcd4",
        paddingVertical: 20,
        borderRadius: 10,
        marginBottom: 30,
        backgroundColor: "#004d40", // Dark teal background for header
      },
      headerText: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#00bcd4", // Teal text color
        textAlign: "center",
      },
      section: {
        marginBottom: 30,
      },
      infoContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 30,
      },
      invoiceInfo: {
        marginBottom: 8,
      },
      invoiceText: {
        marginBottom: 4,
      },
      table: {
        display: "table",
        width: "100%",
        borderCollapse: "collapse", // Collapse table borders
      },
      tableRow: {
        flexDirection: "row",
        borderBottom: "1px solid #004d40", // Dark teal border
        paddingVertical: 12,
      },
      tableCellHeader: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#00bcd4", // Teal text color
        padding: 12,
        borderBottom: "3px solid #00bcd4", // Teal border for header cells
      },
      tableCell: {
        fontSize: 12,
        padding: 12,
        color: "#e0f2f1", // Light teal text color
        borderBottom: "1px solid #004d40", // Dark teal border
      },
      footer: {
        marginTop: "auto",
        borderTop: "3px solid #00bcd4", // Teal border
        paddingTop: 15,
        textAlign: "center",
        fontSize: 10,
        color: "#b2dfdb", // Light teal text color
      },
    });
  } else {
    styles = StyleSheet.create({
      page: {
        padding: 40,
        fontSize: 12,
        color: "#333",
      },
      header: {
        borderBottom: "1px solid #eee",
        paddingBottom: 10,
        marginBottom: 20,
      },
      headerText: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#4A4A4A",
        textAlign: "center",
      },
      section: {
        marginBottom: 20,
      },
      infoContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 40,
        marginBottom: 40,
      },
      invoiceInfo: {
        marginBottom: 10,
      },
      invoiceText: {
        marginBottom: 4,
      },
      table: {
        display: "table",
        width: "auto",
      },
      tableRow: {
        flexDirection: "row",
        borderBottom: "1 solid #eee",
        paddingVertical: 8,
      },
      tableCellHeader: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#555",
      },
      tableCell: {
        fontSize: 12,
        padding: 5,
      },
      footer: {
        marginTop: "auto",
        borderTop: "1 solid #eee",
        paddingTop: 10,
        textAlign: "center",
        fontSize: 10,
        color: "#888",
      },
    });
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>{item.companyName}&apos;s Invoice</Text>
        </View>

        {/* Invoice Info */}
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.invoiceText}>
              Invoice Number: {item.InvoiceName}
            </Text>
            <Text style={styles.invoiceText}>Date: {item.date}</Text>
            <Text style={styles.invoiceText}>Due Date: {item.dueDate}</Text>
          </View>

          {/* Billing Info */}
          <View>
            <Text style={styles.invoiceText}>Billed To:</Text>
            <Text style={styles.invoiceText}>{item.clientName}</Text>
            <Text style={styles.invoiceText}>{item.clientAddress}</Text>
          </View>
        </View>

        {/* Items Table */}
        <View style={styles.section}>
          <View style={[styles.table, { marginBottom: 10 }]}>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCellHeader, { width: "60%" }]}>
                Description
              </Text>
              <Text
                style={[
                  styles.tableCellHeader,
                  { width: "20%", textAlign: "right" },
                ]}
              >
                Quantity
              </Text>
              <Text
                style={[
                  styles.tableCellHeader,
                  { width: "20%", textAlign: "right" },
                ]}
              >
                Price
              </Text>
            </View>
            {item.items.map((itemm, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={[styles.tableCell, { width: "60%" }]}>
                  {itemm.itemName}
                </Text>
                <Text
                  style={[
                    styles.tableCell,
                    { width: "20%", textAlign: "right" },
                  ]}
                >
                  {itemm.itemQuantity}
                </Text>
                <Text
                  style={[
                    styles.tableCell,
                    { width: "20%", textAlign: "right" },
                  ]}
                >{`$${Number(itemm.itemPrice).toFixed(2)}`}</Text>
              </View>
            ))}
          </View>

          {/* Total */}
          <View style={styles.tableRow}>
            <Text
              style={[
                styles.tableCellHeader,
                { width: "80%", textAlign: "right" },
              ]}
            >
              Total
            </Text>
            <Text
              style={[
                styles.tableCellHeader,
                { width: "20%", textAlign: "right" },
              ]}
            >{`$${Number(item.total).toFixed(2)}`}</Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>{item.footerMain}</Text>
          <Text>{item.footerBody}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default InvoiceDocument;
