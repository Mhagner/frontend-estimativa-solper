import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

const style = StyleSheet.create({
    page:{
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section:{
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
})

const PDFCreate = () => {
    return(
        <Document>
            <Page size='A4' style={style.page}>
                <View style={style.section}>
                    <Text>Section #1</Text>
                </View>
                <View style={style.section}>
                    <Text>Section #2</Text>
                </View>
            </Page>
        </Document>
    )
}

export default PDFCreate