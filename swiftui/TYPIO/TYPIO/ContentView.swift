//
//  ContentView.swift
//  TYPIO
//
//  Created by Bram Bijdevaate on 07/12/2021.
//

import SwiftUI

import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(
            alignment: .leading,
            spacing: 10
        ) {
            Text("Space")
                .fontWeight(.bold)
                .padding(.all, 10.0)
            
            
            List {
                Label("text: $documentTitle", systemImage: "lasso.and.sparkles")
                Label("Files", systemImage: "newspaper")
            }
            Text("Settings")
                .fontWeight(.bold)
                .padding(.all, 10.0)
            
            List {
                Label("Folders", systemImage: "folder")
                Label("Import", systemImage: "folder.badge.plus")
                Label("Trash", systemImage: "trash")
            }
        }
        
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
            
    }
}
