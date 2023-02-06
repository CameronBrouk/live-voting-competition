import {
  collection,
  doc,
  FieldPath,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  setDoc,
  where,
  WhereFilterOp,
} from 'firebase/firestore'
import { candidate } from './CONSTANTS'
import { firebaseApp, firestore } from './firebaseConfig'

type CollectionNames = 'votes'

export const getDocumentRef = (collectionName: CollectionNames, id: string) =>
  doc(firestore, collectionName, id)

export const createCollectionId = (collectionName: CollectionNames) =>
  doc(collection(firestore, collectionName)).id

type Vote = {
  id: string
  date: Date
  candidate?: candidate
}

export const createNewVote = async (candidate: candidate) => {
  const id = await createCollectionId('votes')
  const vote = {
    id,
    candidate,
  }
  await setDoc(getDocumentRef('votes', id), vote)
}

export const getVotesForCandidate = async (candidate: candidate) => {
  const collectionQuery = query(
    collection(firestore, 'votes'),
    where('candidate', '==', candidate),
  )

  const { docs } = await getDocs(collectionQuery)

  return docs.map((doc) => doc.data() as Vote)
}
