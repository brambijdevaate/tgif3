//
//  TypeView.swift
//  TYPIO
//
//  Created by Bram Bijdevaate on 17/12/2021.
//

import SwiftUI

struct TypeView: View {
    
    @State private var titleText: String = "Title here"
    @State private var bodyText: String = "Typ here"
    
    var body: some View {
        NavigationView{
            List {
                    Text("Space")
                    .navigationTitle("Space")

                    NavigationLink(destination: Text("Titel")) {
                        Label("Titel", systemImage: "wand.and.stars")
                    }
                
                    NavigationLink(destination: Text("Files")) {
                        Label("Files", systemImage: "folder")
                    }
                        
                    Text("Settings")
                        .navigationSubtitle("Settings")
                        .padding(.top, 10.0)
                
                NavigationLink(destination: Text("Titel")) {
                    Label("Folders", systemImage: "folder")
                }
            
                NavigationLink(destination: Text("Files")) {
                    Label("Import", systemImage: "folder.badge.plus")
                }
                NavigationLink(destination: Text("Files")) {
                    Label("Import", systemImage: "trash")
                }
            }
        }
        VStack() {
            TextEditor(text: $titleText)
                        .padding ()
                        .frame(height: 72.0)
                        .font(.title)
                        
            TextEditor(text: $bodyText)
                        .padding()
                        .font(.body)
                }
    }
}

struct TypeView_Previews: PreviewProvider {
    static var previews: some View {
        TypeView()
    }
}
