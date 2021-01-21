initSidebarItems({"enum":[["QWSElementStatus","Describes a status for an element, i.e. whether an element is known to exist, known not to exist, or is in an undefined (superposition) state with respect to QWSDataView of the QuantumWorldState"],["QWSError","An error type that is used to pass back error codes and error messages"],["QWSMetaData","An enum to represent a data type that can function as either a key or a value used by the meta-data search capabilities of the QWS"]],"macro":[["md_bool","Expresses the bool value as a QWSMetaData type.  Equivalent to `QWSMetaData::Bool()`"],["md_int","Expresses the Integer value as a QWSMetaData type.  Equivalent to `QWSMetaData::Int()`"],["md_str","Expresses the String or &str value as a QWSMetaData type.  Equivalent to `QWSMetaData::String()`"]],"struct":[["QWSDataView","A view into the QuantumWorldState that may represent a partially collapsed or fully collapsed view, and / or the results of a query."],["QWSElementID","An index that uniquely identifies an element in a QuantumWorldState"],["QWSElementWrapper","A wrapper around any generic type to conveniently implement the QWSElement trait."],["QWSElementsIterator","An Iterator for elements in the QuantumWorldState.  A QWSElementsIterator is used to access results from a query."],["QWSTransaction","Represents a transaction in the QuantumWorldState, and provides methods to inspect the transaction."],["QWSTransactionID","An index that uniquely identifies a transaction in a QuantumWorldState"],["QuantumWorldState","The top-level object, containing all elements and transactions for a given world. "]],"trait":[["QWSElement","An element in the QuantumWorldState must implement this trait."]]});