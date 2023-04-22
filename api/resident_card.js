const express = require('express');
const apiRouter = express.Router();

const {
    createResident_Card,
    getAllResident_Cards,
    getResident_CardById,
    getResident_CardByName,
    updateResident_Card,
    deleteResident_Card,
    updateApprovalDocs,
    updateSentLease,
    updateReceivedElectric,
    updateReceivedInsurance,
    updateReceivedSignedLease,
    updateReceivedPayment,
    updateNotes,
    updateMovedIn
} = require('../db/resident_card');
const { getResidentCardsById } = require('../src/api');


// Get all cards
apiRouter.get('/', async (req, res, next) => {
    try {
        const resident_card = await getAllResident_Cards()

        res.send(
            resident_card
        )
    } catch (error) {
        next(error)
    }
});

apiRouter.get('/resident_card/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const resident_card = await getResidentCardsById(id)

        res.send(
            resident_card
        )
    } catch (error) {
        next(error)
    }
});

// Add new card
apiRouter.post('/', async (req, res, next) => {
    try {
        const {
            name,
            apartment,
            move_in_date,
            rent,
            lease_term,
            sent_approval_docs,
            sent_lease,
            received_electric,
            received_insurance,
            received_signed_lease,
            received_payment,
            notes,
            moved_in,
            user_id
        } = req.body;

        const resident_card = await createResident_Card({
            name,
            apartment,
            move_in_date,
            rent,
            lease_term,
            sent_approval_docs,
            sent_lease,
            received_electric,
            received_insurance,
            received_signed_lease,
            received_payment,
            notes,
            moved_in,
            user_id
        })

        res.send(
            resident_card
        )
    } catch (error) {
        next(error)
    }
});

apiRouter.patch('/:resident_card_id', async (req, res, next) => {

    try {
        const id = req.params.resident_card_id;
        const {
            name,
            apartment,
            move_in_date,
            rent,
            lease_term,
            sent_approval_docs,
            sent_lease,
            received_electric,
            received_insurance,
            received_signed_lease,
            received_payment,
            notes,
            moved_in,
            user_id
        } = req.body;

        const updateResident_Card = await updateResident_Card({
            id: id,
            name,
            apartment,
            move_in_date,
            rent,
            lease_term,
            sent_approval_docs,
            sent_lease,
            received_electric,
            received_insurance,
            received_signed_lease,
            received_payment,
            notes,
            moved_in,
            user_id
        })

        res.send(
            updateResident_Card
        )
    } catch (error) {
        next(error)
    }
});

// update approval docs
apiRouter.patch('/:resident_card_id/approvaldocs', async (req, res, next) => {
    

    try {
        const id = req.params.resident_card_id;
        const {
            sent_approval_docs,
        } = req.body;

        const updateResident_Card = await updateApprovalDocs({
            id: id,
            sent_approval_docs
        })

        res.send(
            updateResident_Card
        )
    } catch (error) {
        next(error)
    }
});

// update lease sent?
apiRouter.patch('/:resident_card_id/leasesent', async (req, res, next) => {
   

    try {
        const id = req.params.resident_card_id;
        const {
            sent_lease,
        } = req.body;

        const updateResident_Card = await updateSentLease({
            id: id,
            sent_lease
        })

        res.send(
            updateResident_Card
        )
    } catch (error) {
        next(error)
    }
});

// update received electric
apiRouter.patch('/:resident_card_id/receivedelectric', async (req, res, next) => {

    try {
        const id = req.params.resident_card_id;
        const {
            received_electric,
        } = req.body;

        const updateResident_Card = await updateReceivedElectric({
            id: id,
            received_electric
        })

        res.send(
            updateResident_Card
        )
    } catch (error) {
        next(error)
    }
});

// update received insurance
apiRouter.patch('/:resident_card_id/receivedinsurance', async (req, res, next) => {

    try {
        const id = req.params.resident_card_id;
        const {
            received_insurance,
        } = req.body;

        const updateResident_Card = await updateReceivedInsurance({
            id: id,
            received_insurance
        })

        res.send(
            updateResident_Card
        )
    } catch (error) {
        next(error)
    }
});


// update signed lease
apiRouter.patch('/:resident_card_id/receivedsignedlease', async (req, res, next) => {

    try {
        const id = req.params.resident_card_id;
        const {
            received_signed_lease,
        } = req.body;

        const updateResident_Card = await updateReceivedSignedLease({
            id: id,
            received_signed_lease
        })

        res.send(
            updateResident_Card
        )
    } catch (error) {
        next(error)
    }
});

// update received payment
apiRouter.patch('/:resident_card_id/receivedpayment', async (req, res, next) => {

    try {
        const id = req.params.resident_card_id;
        const {
            received_payment,
        } = req.body;

        const updateResident_Card = await updateReceivedPayment({
            id: id,
            received_payment
        })

        res.send(
            updateResident_Card
        )
    } catch (error) {
        next(error)
    }
});

// update received insurance
apiRouter.patch('/:resident_card_id/notes', async (req, res, next) => {

    try {
        const id = req.params.resident_card_id;
        const {
            notes,
        } = req.body;

        const updateResident_Card = await updateNotes({
            id: id,
            notes
        })

        res.send(
            updateResident_Card
        )
    } catch (error) {
        next(error)
    }
});

// update moved in?
apiRouter.patch('/:resident_card_id/movedin', async (req, res, next) => {

    try {
        const id = req.params.resident_card_id;
        const {
            moved_in,
        } = req.body;

        const updateResident_Card = await updateMovedIn({
            id: id,
            moved_in
        })

        res.send(
            updateResident_Card
        )
    } catch (error) {
        next(error)
    }
});

apiRouter.delete('/:resident_card_id', async (req, res, next) => {
    try {
        const id = req.params.resident_card_id;
        const removeResident_Card = await deleteResident_Card(id);

        res.send(removeResident_Card);

    } catch (error) {
        next(error)
    }
});


module.exports = apiRouter;